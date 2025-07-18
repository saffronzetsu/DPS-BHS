document.addEventListener("DOMContentLoaded", function () {
    const cursorCircle = document.createElement("div");
    cursorCircle.classList.add("custom-cursor");

    const cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-dot");

    document.body.appendChild(cursorCircle);
    document.body.appendChild(cursorDot);

    const proximity = 30; // distance in px

    function isNearTargetElements(x, y) {
      const selectors = 'a, button, img, video, p, span, h1, h2, h3, h4, h5, h6';
      const elements = document.querySelectorAll(selectors);

      for (let el of elements) {
        const rect = el.getBoundingClientRect();

        // skip invisible or zero-sized elements
        if (rect.width === 0 && rect.height === 0) continue;

        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= proximity) {
          return true;
        }
      }
      return false;
    }

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorCircle.style.transform = `translate(${x}px, ${y}px)`;
      cursorDot.style.transform = `translate(${x}px, ${y}px)`;

      if (isNearTargetElements(x, y)) {
        // Close to a content element — show big circle
        cursorCircle.style.opacity = '1';
        cursorDot.style.opacity = '0';
        document.body.classList.add('cursor-hide');
      } else {
        // Not near any content — show tiny dot and cursor
        cursorCircle.style.opacity = '0';
        cursorDot.style.opacity = '1';
        document.body.classList.remove('cursor-hide');
      }
    });
  });
