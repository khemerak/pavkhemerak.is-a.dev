# Minimalist Portfolio

My personal, clean, responsive, and minimalist portfolio built with a modern, lightweight frontend tech stack. Designed with a dark monochrome aesthetic, seamless single-page scrolling, and clean pathname-based navigation.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool & Dev Server**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Typography**: [Fira Code](https://fonts.google.com/specimen/Fira+Code) & [Roboto](https://fonts.google.com/specimen/Roboto)
- **Linting**: [ESLint](https://eslint.org/)

---

## Features

- **Single-Page Flow with Clean URLs**: All sections (`/`, `/about`, `/educations`, `/skills`, `/projects`, `/contact`) render on a continuous scrollable canvas while maintaining clean browser paths without hash fragments.
- **Scroll-Spy Navigation**: The sidebar navigation dynamically updates active section highlights and synchronizes the browser address bar as you scroll.
- **Responsive Layout**: Sticky vertical sidebar on desktop and a compact, scrollable navigation bar on mobile.
- **Interactive Components**: Expandable project descriptions, smooth scroll-to-top floating button, and direct mail link.
- **Monochrome Dark Theme**: Tailored color palette with high contrast and subtle surfaces.

---

## Project Structure

```text
src/
├── assets/          # Static media and assets
├── components/      # Modular portfolio sections
│   ├── About.jsx
│   ├── Educations.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── ScrollTop.jsx
│   └── Skills.jsx
├── App.jsx          # Layout, routing, and scroll sync logic
├── index.css        # Tailwind imports and design theme tokens
└── main.jsx         # Application entry point
```
