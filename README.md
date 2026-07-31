# Purva Khurud — Portfolio Website

A premium, dark-themed, fully responsive personal portfolio built with plain
**HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build step.



---

## ✨ Features

- Sticky, transparent-to-solid navbar with active-link highlighting and a mobile hamburger menu
- Hero section with typing animation, glowing neon profile ring, and floating background blobs
- Animated stat counters in the About section
- Category-based, animated skill bars (Languages, Frameworks, ML, Libraries, Databases, Tools)
- Glassmorphism project cards with tech badges, GitHub and live-demo links
- Timeline layouts for Education and Internship
- Contact section with direct email / phone / GitHub / LinkedIn links
- Page loader, scroll-reveal animations, cursor glow, and a back-to-top button
- Fully responsive across desktop, laptop, tablet, and mobile — nothing breaks

## 🛠 Built With

- **HTML5** — semantic markup
- **CSS3** — custom properties, Flexbox, Grid, keyframe animations
- **Vanilla JavaScript** — no jQuery, no frameworks
- **[Google Fonts](https://fonts.google.com/)** — Poppins & Inter
- **[Font Awesome](https://fontawesome.com/)** — icon set (loaded via CDN)

## 📁 Project Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── profile.jpg        
    │ 
    └── resume/
        └── resume.pdf          
```

## 🚀 Getting Started (run it locally)

No installation or build tools required.

1. Download / clone this folder
2. Open `index.html` directly in your browser

   — or, for the best experience (some browsers restrict local file access),
   serve it with a simple local server:

   ```bash
   # Python 3
   python -m http.server 5500

   # Node (if you have it)
   npx serve .
   ```
3. Visit `http://localhost:5500` (or whatever port your tool shows)

## 🎨 Customizing

### Replace the profile photo
Add your photo as `assets/images/profile.jpg`. If the file is missing, the
site automatically falls back to a styled placeholder — so nothing breaks
if you forget.

### Update project details
Open `index.html`, find the `<!-- PROJECTS -->` section, and edit the
title, description, tech badges, and GitHub 

### Edit colors and fonts
All colors live as CSS custom properties at the top of `style.css`:

```css
:root {
  --bg-primary: #0B0F19;
  --bg-secondary: #111827;
  --accent-primary: #00C2FF;
  --accent-secondary: #2563EB;
  --white: #FFFFFF;
  --gray: #9CA3AF;
}
```

Change a value once here and it updates everywhere. Fonts are loaded via
Google Fonts in `index.html` — swap the `family=` parameters in that link
and the matching `font-family` values in `style.css` to use different ones.

### Replace the resume
Add your PDF as `assets/resume/resume.pdf`. The "Download Resume" button
in the hero section links straight to that path.


## 📬 Contact

- **Email:** purvakhurud8@gmail.com
- **GitHub:** [github.com/PurvaKhurud](https://github.com/PurvaKhurud)
- **LinkedIn:** [linkedin.com/in/purva-khurud](https://www.linkedin.com/in/purva-khurud)

## 📄 License

This project is free to use as a personal portfolio template. Attribution
is appreciated but not required.

