#!/bin/bash

# DevDocs Global Website - Automated Setup Script
# This script will organize all files and set up the project

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     DevDocs Global Website - Automated Setup                ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Step 1: Create project structure
echo "📁 Creating project structure..."
mkdir -p devdocs-global-website/src/{app/{dashboard,automation,features},components,data,styles}
cd devdocs-global-website

# Step 2: Move configuration files
echo "📋 Moving configuration files..."
mv ../package.json .
mv ../next.config.js .
mv ../tailwind.config.js .
mv ../postcss.config.js .
mv ../.gitignore .
mv ../README.md .

# Step 3: Move components
echo "🧩 Moving components..."
mv ../Navbar.js src/components/
mv ../Hero.js src/components/
mv ../LanguageSelector.js src/components/
mv ../DocViewer.js src/components/
mv ../FlowTimeline.js src/components/
mv ../FeatureCard.js src/components/
mv ../ScoreBar.js src/components/

# Step 4: Move pages
echo "📄 Moving pages..."
mv ../layout.js src/app/
mv ../page-home.js src/app/page.js
mv ../page-dashboard.js src/app/dashboard/page.js
mv ../page-automation.js src/app/automation/page.js
mv ../page-features.js src/app/features/page.js

# Step 5: Move data and styles
echo "🎨 Moving data and styles..."
mv ../mockDocs.js src/data/
mv ../globals.css src/styles/

# Step 6: Clean up
echo "🧹 Cleaning up..."
mv ../SETUP-GUIDE.txt .
mv ../setup.sh .

# Step 7: Install dependencies
echo ""
echo "🔧 Installing dependencies..."
echo "This may take a few minutes..."
npm install

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                   ✅ SETUP COMPLETE!                         ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "📱 Then open http://localhost:3000 in your browser"
echo ""
echo "═══════════════════════════════════════════════════════════════"
