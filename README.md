# 🧱 Tiles Gallery

Tiles Gallery is a premium, state-of-the-art web application showcasing a curated collection of floor and wall tiles. Designed with high-end aesthetics, smooth micro-animations, and instant interactive search/filter states, this application offers users a seamless gallery browsing experience to discover their perfect room aesthetic.

## 🔗 Live Application
The project is deployed and live at:  
👉 **[https://tiles-gallery-green.vercel.app](https://tiles-gallery-green.vercel.app)**

---

## 🚀 Key Features

- **✨ Stunning & Premium UI/UX:** Built with a cohesive color palette, modern typography (Geist), customized page layouts, and responsiveness for mobile, tablet, and desktop screens.
- **⚡ Dynamic Hero & Home Sections:** Contains a high-end Unsplash background banner, zoom-in animation cards, and an interactive horizontal ticker of new arrivals using scrolling marquee features.
- **🔍 Real-Time Catalog Search & Filter:** The "All Tiles" catalog fetches products dynamically and allows real-time instant searches by tile name with seamless loader/spinner states.
- **📄 Precise Specifications Details:** Clicking any tile card loads a detailed single-product workspace displaying dimensions, material info, categories, pricing, stock availability badges, and customized styled tag collections.
- **🔐 Secure Authentication (Better-Auth):** Complete credential-based registration and secure login, alongside a full Google OAuth/Social sign-in path.
- **🗄️ MongoDB Adapter Support:** Persistence for users, user credentials, and active login sessions is handled through MongoDB driver integration.
- **👤 Dynamic User Profile Settings:** Registered users can view details and edit/update their name and avatar image URL in an overlay model, which syncs directly with the database.
- **🔔 Interactive Toast Feedback:** Integration with `react-toastify` alerts the user for successful sign-ins, profile updates, account creation, or error handling.

---

## 🛠️ Tech Stack & npm Packages Used

The application utilizes a modern, optimized web stack:

### Core Framework & Runtimes
- [**Next.js (v16.2.7)**](https://nextjs.org/) - React framework utilizing the App Router layout model.
- [**React & React-DOM (v19.2.4)**](https://react.dev/) - Frontend UI component state management.

### UI Library & Styling
- [**HeroUI (`@heroui/react` & `@heroui/styles`)**](https://heroui.com/) - Premium accessible React component suite used for cards, buttons, textfields, modals, chips, and avatars.
- [**Tailwind CSS (v4)**](https://tailwindcss.com/) - Utility-first styling engine driving cohesive page layout design and responsiveness.
- [**Animate.css (v4.1.1)**](https://animate.style/) - Instant CSS animations (`animate__zoomIn`, `animate__bounce`) for transitions.
- [**React Fast Marquee (v1.6.5)**](https://www.npmjs.com/package/react-fast-marquee) - Supercharged scrolling marquee container for new arrival updates.
- [**React Icons**](https://react-icons.github.io/react-icons/) & [**Gravity UI Icons**](https://github.com/gravity-ui/icons) - Unified system icons for Google, editing, checkmarks, etc.

### Authentication & Backend
- [**Better-Auth (v1.6.14)**](https://www.better-auth.com/) - Fully-featured auth library providing email/password credential control and Google OAuth workflows.
- [**Better-Auth MongoDB Adapter (`@better-auth/mongo-adapter`)**](https://www.better-auth.com/docs/adapters/mongodb) - Connector connecting user credentials and sessions to the database.
- [**MongoDB Client Driver (v7.2.0)**](https://www.npmjs.com/package/mongodb) - Native database driver for querying and modifying collections.
- [**React Toastify (v11.1.0)**](https://www.npmjs.com/package/react-toastify) - Custom styled feedback notifications.

---

## 📁 File Structure Overview

```text
tiles-gallery/
├── public/                 # Static assets and tile catalog database
│   ├── data.json           # Local JSON dataset containing 30 premium tiles
│   └── *.svg               # Next.js/Vercel standard vectors
├── src/
│   ├── app/                # Next.js App Router endpoints
│   │   ├── all-tiles/      # Catalog search, filtering, and loading state
│   │   │   └── [id]/       # Dynamic single product detail page workspace
│   │   ├── api/auth/       # Wildcard catch-all endpoint for Better-Auth
│   │   ├── profile/        # Secured profile overview and update controls
│   │   ├── signin/         # Credentials & Google Sign-In page
│   │   ├── signup/         # Account registration page
│   │   ├── layout.js       # Global providers, nav, footer & toast context
│   │   └── page.js         # Landing / home route
│   ├── assets/             # Raw media assets
│   │   └── images/         # Local high-res tile catalog mockups
│   ├── components/         # Reusable UI component modules
│   │   ├── banner/         # Aesthetic home banner
│   │   ├── feature/        # Featured highlights display layout
│   │   ├── footer/         # Navigation footer layout
│   │   ├── marquee/        # "Latest Products" fast-scrolling ticker
│   │   ├── navbar/         # Navigation header showing session auth states
│   │   ├── tilesCard/      # High-performance tile card item representation
│   │   └── user_update/    # Overlay Modal component for updating credentials
│   ├── lib/                # Configured utilities
│   │   ├── auth.js         # Better-Auth server configuration & DB adapter setup
│   │   └── auth-client.js  # Better-Auth client instance initialization
│   └── proxy.js            # Route matching helper logic
├── package.json            # Scripts & project dependencies manifest
└── postcss.config.mjs      # CSS build configurations
```

## 🛠️ Getting Started & Development

### 1. Clone the repository
```bash
git clone https://github.com/RotnoDas/Tiles-gallery.git
cd tiles-gallery
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your browser to view the application.

### 4. Build for production
```bash
npm run build
npm start
```
