# MNR Institute of Nursing Science — Official Website

A fully responsive, multi-page static website for **MNR Institute of Nursing Science**, built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies except Google Fonts and Lucide Icons.

---

## 🌐 Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, stats, programs, why MNR, testimonials, affiliations |
| About | `pages/about.html` | Story, vision & mission, values, faculty, accreditations |
| Academics | `pages/academics.html` | GNM, B.Sc & M.Sc program details, eligibility, subjects |
| Admissions | `pages/admissions.html` | Eligibility, process, fee structure, online application form |
| Campus Life | `pages/campus.html` | Facilities, hostel, activities, photo gallery |
| Contact | `pages/contact.html` | Enquiry form, location, map, FAQ |

---

## 📁 Folder Structure

```
MNR-NURSING-COLLEGE/
├── index.html
├── README.md
├── css/
│   └── style.css          # Shared styles for all pages
├── js/
│   └── main.js            # Shared JS — navbar, animations, forms
├── images/
│   ├── doctor.jpg         # Hero section image
│   ├── aboutus.png        # About page college photo
│   ├── doctor-default.jpeg# Default faculty photo
│   └── Nursing-skills-lab.png  # Facility cards image
└── pages/
    ├── about.html
    ├── academics.html
    ├── admissions.html
    ├── campus.html
    └── contact.html
```

---

## 🛠️ Tech Stack

- **HTML5** — semantic markup across all pages
- **CSS3** — custom properties, flexbox, grid, animations
- **Vanilla JavaScript** — IntersectionObserver, count-up animation, mobile menu
- **[Lucide Icons](https://lucide.dev/)** — via CDN (`unpkg.com`)
- **[Google Fonts](https://fonts.google.com/)** — DM Serif Display + DM Sans

No build tools, no npm, no bundler — open any HTML file directly in a browser.

---

## ✨ Features

- **Fully responsive** — mobile, tablet, and desktop breakpoints
- **Sticky navbar** with shadow on scroll and active link highlighting
- **Hamburger menu** for mobile navigation
- **Scroll-triggered animations** using IntersectionObserver
- **Count-up stats** that animate when scrolled into view
- **Announcement ticker** with pause-on-hover
- **Online application form** with basic validation (Admissions page)
- **Enquiry form** with submit feedback (Contact page)
- **FAQ accordion** using native HTML `<details>` element
- **Consistent header & footer** across all 6 pages

---

## 🎨 Design

- **Color theme** — Navy blue & royal blue matching the MNR logo
- **Typography** — DM Serif Display (headings) · DM Sans (body)
- **CSS variables** — entire color palette controlled from `:root` in `style.css`

To change the color theme, update only the CSS variables at the top of `css/style.css`.

---

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/mnr-nursing-college.git
   ```

2. Open `index.html` in any browser — no server required

3. To add real images, place them in the `images/` folder and update the `src` attributes in the relevant HTML files

---

## 📸 Adding Images

| Location | File to edit | Image src to update |
|---|---|---|
| Hero (Home) | `index.html` | `images/doctor.jpg` |
| About page | `pages/about.html` | `../images/aboutus.png` |
| Faculty cards | `pages/about.html` | `../images/doctor-default.jpeg` |
| Facility cards | `pages/campus.html` | `../images/Nursing-skills-lab.png` |
| Gallery | `pages/campus.html` | Add `<img>` inside each `.gallery-item` |
| Map embed | `pages/contact.html` | Replace placeholder div with Google Maps `<iframe>` |

---

## 📋 To-Do / Customise

- [ ] Replace placeholder images with real college photos
- [ ] Add real Google Maps embed on Contact page
- [ ] Update faculty names, roles, and photos
- [ ] Connect enquiry & application forms to a backend or form service (e.g. Formspree, EmailJS)
- [ ] Add real affiliated hospital logos to the Home page strip
- [ ] Update college address, phone, and email across all pages
- [ ] Add the logo image to navbar (replace the CSS emblem with `<img src="images/nursing-logo.png">`)

---

## 📄 License

This project is built for **MNR Institute of Nursing Science**. All rights reserved © 2025.