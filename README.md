# 🌌 StarScope Tours (By Birla High School, Moira Street)

StarScope Tours is an interactive stargazing website that allows users to explore curated on-site astronomical tours, visualize the solar system in real-time, and contact the organizers directly through a built-in contact form. Built for space enthusiasts, families, and astrophotography lovers alike.

---

## 🚀 Features

### ✅ Hero Section
- Engaging introduction with a dark-sky themed full-screen background.
- Call-to-action button leading to the Tours section.

### ✅ Guided Tours Section
- Dynamic tour details (3 options):
  - **Dark-Sky Discovery**
  - **Mountain Milky Way**
  - **Family Night Under Stars**
- Interactive tabs to display tour information.
- Personalized pricing logic for logged-in users using `localStorage`.

### ✅ Educational Space Viewer
- Embedded [Solar System Scope](https://www.solarsystemscope.com/iframe) in an iframe.
- Fully interactive planetarium-style experience.

### ✅ Contact Form
- Fields: Name, Email, and Message.
- Front-end validation for:
  - Empty fields
  - Valid email format
- Success message displayed upon valid submission.
- Data not submitted to a backend (educational/demo purpose only).
  
### ✅ Login System (Frontend-only)
- Simulated login system using `localStorage`.
- Changes navbar to greet logged-in users.
- Includes logout option.
- (No password protection or server-side auth — intended for demo purposes.)

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Custom styles, responsive layout)
- **JavaScript (ES6+)**
- **AOS Library** for smooth scroll animations
- **Google Fonts**: Orbitron (titles), Lato (body)
- **Solar System Scope iframe** for educational simulation

---

## 📦 Installation & Usage

1. **Clone or Download** this repository:

   ```bash
   git clone https://github.com/your-username/starscope-tours.git
   cd starscope-tours
