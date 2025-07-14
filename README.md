# 🚀 Cosmic Portfolio

A modern, cosmic-themed portfolio built with React and Vite, featuring animated sections, a dynamic project gallery, a Google Drive-powered resume viewer, and a secure, user-friendly contact form via EmailJS.

---

## 🌟 Features

- **Cosmic UI**: Futuristic, space-inspired design with smooth Framer Motion animations.
- **Projects Gallery**: Showcases real projects from your GitHub, categorized by domain, with modals for details.
- **Resume Section**: Embeds a Google Drive PDF resume for in-browser preview and download.
- **Contact Form**: Uses EmailJS for direct-to-inbox messaging, with real-time validation and toast notifications.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile.
- **Footer**: Compact, with horizontal contact info and social links.

---

## 🛠️ Tech Stack

- **React 18** (functional components, hooks)
- **Vite** (fast dev/build)
- **Framer Motion** (animations)
- **EmailJS** (contact form)
- **Google Drive** (resume hosting)
- **CSS3** (custom cosmic styles)

---

## 🚦 Getting Started

### 1. Clone the repo

### 2. Install dependencies
npm install

or
yarn install

### 3. Configure Environment Variables

Create a `.env` file in the project root:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_DRIVE_FILE_ID=your_google_drive_file_id

### 4. Run the development server
npm run dev

or
yarn dev

---

## 📤 Deployment

### Vercel / Netlify / Render

- Add the same environment variables in your deployment dashboard.
- Push to your GitHub repo; the site will auto-deploy.

---

## ✨ Project Structure
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── Resume/
│   │   ├── Resume.jsx
│   │   └── Resume.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── assets/
│   └── images/
│       ├── srover.jpg
│       ├── ank.data.jpg
│       ├── jpeg.png
│       └── signal.png
└── App.jsx


---

## ⚡ Key Implementation Details

### Projects Gallery

- Projects are grouped by domain (IoT, Web, Algorithms, Electronics).
- Each project card shows title, description, tech stack, and key features.
- Clicking a card opens a modal with full details.
- Demo buttons only appear if a real demo link is provided.

### Resume Section

- Resume is stored on Google Drive (publicly shareable link).
- Uses the Drive file ID from the `.env` file.
- Supports in-browser preview (iframe), download, and open-in-Drive.

### Contact Form

- Uses EmailJS public keys (safe for frontend).
- All form fields map exactly to EmailJS template variables.
- Includes a hidden time field for timestamping.
- Shows success/error toasts and disables the submit button while sending.

---

## 🔒 Security & Environment Variables

- **All `VITE_` variables are exposed to the browser.**  
  Only use these for public keys and IDs (never secrets or passwords).
- **Never commit `.env` to GitHub.**
- For sensitive logic, use a backend/serverless function (not possible in frontend-only deployments).

---

## 🛠️ Troubleshooting

| Problem                                 | Solution                                                                 |
|------------------------------------------|--------------------------------------------------------------------------|
| EmailJS "template not found"             | Double-check your template ID in `.env` and EmailJS dashboard            |
| "Transmission failed" on contact form    | Ensure all `.env` values are set, restart dev server, check browser console |
| Resume not showing on deploy             | Add all `VITE_` variables in your host's dashboard, redeploy             |
| Keys visible in browser                  | This is normal for public APIs; do not use for secrets                   |

---

## 📝 Customization

- **Add/Edit Projects:**  
  Modify `projects` array in `Projects.jsx` to update your gallery.
- **Change Resume:**  
  Upload new PDF to Google Drive, update `VITE_DRIVE_FILE_ID` in `.env`.
- **Update Contact Info:**  
  Edit `contactInfo` and `socialLinks` arrays in `Contact.jsx`.
- **Change Theme or Animations:**  
  Tweak CSS and Framer Motion props in each component.

---

## 📚 Credits

- [EmailJS](https://www.emailjs.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Drive](https://drive.google.com/)
- [Unsplash](https://unsplash.com/) (demo images)

---

## 💡 License

MIT License.  
Feel free to fork, customize, and use for your own cosmic journey!




