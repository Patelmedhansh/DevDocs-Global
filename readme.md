# DevDocs Global - AI-Powered Multilingual Documentation Website

A modern, interactive website showcasing how AI can automatically translate documentation into multiple languages.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
devdocs-global-website/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with Navbar
│   │   ├── page.js                # Home page with Hero
│   │   ├── dashboard/
│   │   │   └── page.js            # Translation dashboard
│   │   ├── automation/
│   │   │   └── page.js            # Automation flow
│   │   └── features/
│   │       └── page.js            # Smart features page
│   ├── components/
│   │   ├── Navbar.js              # Navigation bar
│   │   ├── Hero.js                # Home hero section
│   │   ├── LanguageSelector.js   # Language dropdown
│   │   ├── DocViewer.js           # Document viewer
│   │   ├── FlowTimeline.js        # Automation timeline
│   │   ├── FeatureCard.js         # Feature card component
│   │   └── ScoreBar.js            # Quality score bar
│   ├── data/
│   │   └── mockDocs.js            # Mock documentation data
│   └── styles/
│       └── globals.css            # Global styles
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

- **Home Page**: Hero section with animated language transformation
- **Dashboard**: Side-by-side translation viewer with language selector
- **Automation**: Visual timeline showing the complete automation flow
- **Features**: Smart feature cards highlighting key capabilities

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📝 File Organization

All files have been created in the current directory. To set up the proper structure:

1. Create a new directory: `mkdir devdocs-global-website`
2. Move into it: `cd devdocs-global-website`
3. Move the configuration files (package.json, next.config.js, etc.) to root
4. Create src/ directory structure
5. Move component files to src/components/
6. Move page files to appropriate src/app/ locations
7. Move mockDocs.js to src/data/
8. Move globals.css to src/styles/

## 🎯 Key Pages

- `/` - Home page with hero and overview
- `/dashboard` - Interactive translation dashboard
- `/automation` - Automation flow timeline
- `/features` - Smart features showcase

## 🌐 Supported Languages

The demo includes translations for:
- 🇬🇧 English (Original)
- 🇪🇸 Spanish
- 🇫🇷 French
- 🇩🇪 German
- 🇯🇵 Japanese
- 🇮🇳 Hindi
- 🇨🇳 Chinese

## 📦 Next Steps

1. Customize the mock documentation data in `src/data/mockDocs.js`
2. Add your own branding and colors in `tailwind.config.js`
3. Connect to real translation API endpoints
4. Deploy to Vercel or your preferred hosting platform

## 🚢 Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel (recommended)
vercel

# Or use any other hosting platform
```

## 💡 Tips for Hackathon Demo

1. Start on the Home page to show the concept
2. Move to Dashboard to demonstrate the translation viewer
3. Show the Automation page to explain the workflow
4. End on Features to highlight technical innovation

---

Built with ❤️ for global developers
