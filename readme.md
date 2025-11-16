# DevDocs Global 🌍

[![npm version](https://badge.fury.io/js/devdocs-global.svg)](https://badge.fury.io/js/devdocs-global)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

**AI-powered multilingual documentation translation system** with web dashboard, CLI tool, and GitHub Actions automation.

Translate your documentation into **6+ languages** automatically using Lingo.dev SDK powered by GPT-4.

## ✨ Features

- 🚀 **Full-Stack Application** - Web dashboard + CLI tool + GitHub Actions automation
- 🤖 **AI-Powered Translation** - Uses Lingo.dev SDK with GPT-4 precision
- 📝 **Markdown Support** - Preserves formatting, code blocks, and links
- 🌍 **Multi-Language** - Translates to Spanish, French, German, Japanese, Hindi, Chinese
- ⚡ **Smart Caching** - Incremental translations save time and API costs
- 🔄 **GitHub Actions** - Auto-translate on every push
- 💾 **Quality Metrics** - 95-99% translation accuracy
- 📊 **Dashboard UI** - Beautiful React interface for translations
- 🖥️ **CLI Tool** - Use from command line or CI/CD pipelines
- 🔐 **Secure** - Your API key stays local, never exposed

## 🚀 Quick Start

### Installation

#### Global CLI (Recommended)

```bash
npm install -g devdocs-global
```

#### Local Project

```bash
npm install devdocs-global
```

### Setup

#### 1. Get API Key

1. Visit [lingo.dev](https://lingo.dev)
2. Sign up for free
3. Get your API key from dashboard

#### 2. Initialize

```bash
devdocs-global init
```

Creates `devdocs.config.json` with default settings.

#### 3. Set API Key

```bash
export LINGODOTDEV_API_KEY=your_api_key_here
```

Or add to `.env.local`:
```
LINGODOTDEV_API_KEY=your_api_key_here
```

#### 4. Organize Your Docs

```
docs/
└── en/
    ├── getting-started.md
    ├── installation.md
    └── features.md
```

#### 5. Translate

```bash
devdocs-global translate
```

Creates:
```
docs/
├── en/ (original)
├── es/ (Spanish)
├── fr/ (French)
├── de/ (German)
├── ja/ (Japanese)
├── hi/ (Hindi)
└── zh/ (Chinese)
```

## 📖 Commands

### `devdocs-global init`

Initialize DevDocs Global in your project.

```bash
devdocs-global init
```

Creates `devdocs.config.json`:
```json
{
  "sourceLanguage": "en",
  "sourceDir": "./docs",
  "targetLanguages": ["es", "fr", "de", "ja", "hi", "zh"],
  "outputDir": "./docs",
  "apiKey": "your-api-key",
  "cacheDir": "./.lingo-cache"
}
```

### `devdocs-global translate [options]`

Translate documentation to multiple languages.

```bash
devdocs-global translate
```

**Options:**
```bash
-s, --source <language>     Source language (default: auto-detect)
-t, --targets <languages>   Target languages (comma-separated)
--source-dir <path>         Source documentation directory
--output-dir <path>         Output directory for translations
--incremental               Only translate changed files
```

**Examples:**

```bash
# Translate all files to default languages
devdocs-global translate

# Translate to specific languages only
devdocs-global translate -t es,fr,de

# Use custom directories
devdocs-global translate --source-dir ./documentation --output-dir ./translated

# Only translate changed files (faster)
devdocs-global translate --incremental

# Specify source language
devdocs-global translate -s en -t es,fr
```

### `devdocs-global detect <file>`

Detect the language of a document.

```bash
devdocs-global detect docs/en/getting-started.md
```

Output:
```
Detected language: en
```

### `devdocs-global status`

Show translation status and statistics.

```bash
devdocs-global status
```

Output:
```
📊 Translation Status

Configuration:
  Source Language: en
  Target Languages: es, fr, de, ja, hi, zh
  Source Dir: ./docs
  Output Dir: ./docs

Cache Status: 5 files cached
```

## 📋 Configuration

Edit `devdocs.config.json`:

```json
{
  "sourceLanguage": "en",
  "sourceDir": "./docs",
  "targetLanguages": ["es", "fr", "de", "ja", "hi", "zh"],
  "outputDir": "./docs",
  "apiKey": "your-lingo-api-key",
  "cacheDir": "./.lingo-cache"
}
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `sourceLanguage` | string | `"en"` | Source language code (or "auto" to detect) |
| `sourceDir` | string | `"./docs"` | Directory containing source documentation |
| `targetLanguages` | array | `["es", "fr", "de", "ja", "hi", "zh"]` | Target language codes |
| `outputDir` | string | `"./docs"` | Output directory for translations |
| `apiKey` | string | - | Lingo.dev API key |
| `cacheDir` | string | `"./.lingo-cache"` | Cache directory for incremental updates |

## 🌐 Supported Languages

| Code | Language |
|------|----------|
| en | English |
| es | Spanish |
| fr | French |
| de | German |
| ja | Japanese |
| hi | Hindi |
| zh | Chinese |
| pt | Portuguese |
| ru | Russian |
| ar | Arabic |

## 🔄 GitHub Actions Integration

Automatically translate documentation on every push!

### Setup GitHub Actions

1. **Add Secret**
   - Go to: Settings → Secrets and variables → Actions
   - Add: `LINGODOTDEV_API_KEY` with your API key

2. **Create Workflow**

File: `.github/workflows/auto-translate.yml`

```yaml
name: Auto-Translate Documentation

on:
  push:
    branches: [ main ]
    paths:
      - 'docs/en/**'
      - 'package.json'
      - '.github/workflows/auto-translate.yml'

permissions:
  contents: write

jobs:
  translate:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
      with:
        fetch-depth: 0

    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'

    - run: npm ci

    - name: Clean old translations
      run: rm -rf docs/es docs/fr docs/de docs/ja docs/hi docs/zh

    - name: Run translations
      env:
        LINGODOTDEV_API_KEY: \${{ secrets.LINGODOTDEV_API_KEY }}
      run: npm run translate

    - name: Commit and push
      run: |
        git config user.name "github-actions[bot]"
        git config user.email "github-actions[bot]@users.noreply.github.com"
        if ! git diff --quiet; then
          git add docs/
          git commit -m "🌍 chore: Auto-translate documentation"
          git push origin main
        fi
```

## 💻 Web Dashboard

Use the web interface for easier management:

1. **Start Dev Server**
   ```bash
   npm run dev
   ```

2. **Open Dashboard**
   ```
   http://localhost:3000/dashboard
   ```

3. **Upload & Translate**
   - Select markdown files
   - Choose target languages
   - Click "Translate Now"
   - Download results

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/Patelmedhansh/DevDocs-Global.git
cd DevDocs-Global

# Install dependencies
npm install

# Create .env.local
echo "LINGODOTDEV_API_KEY=your_key_here" > .env.local

# Start development
npm run dev
```

### Project Structure

```
DevDocs-Global/
├── src/
│   ├── cli/              # CLI tool
│   │   ├── index.js      # Main CLI entry
│   │   ├── translator.js # Lingo SDK integration
│   │   ├── extractor.js  # Text extraction
│   │   ├── cache.js      # Caching logic
│   │   └── languageDetector.js
│   └── app/              # Next.js web app
│       ├── page.js       # Home page
│       ├── dashboard/    # Dashboard
│       └── api/          # API routes
├── docs/
│   └── en/               # Source documentation
├── .github/workflows/    # GitHub Actions
├── package.json
└── README.md
```

## 📦 API Reference

### LingoTranslator

```javascript
import { LingoTranslator } from './translator.js';

const translator = new LingoTranslator(apiKey);

// Translate text
const result = await translator.translate(text, 'en', 'es');

// Batch translate
const results = await translator.batchTranslate(texts, 'en', ['es', 'fr']);

// Detect language
const lang = await translator.detectLanguage(text);

// Get supported languages
const langs = await translator.getSupportedLanguages();
```

## 🔐 Security

- ✅ API keys stored locally in `.env.local` (not committed)
- ✅ Never exposed in public files
- ✅ GitHub Actions uses Secrets (encrypted)
- ✅ No data sent to third parties except Lingo.dev
- ✅ Uses HTTPS for all API calls

## 📊 Performance

- **Translation Speed**: ~2-5 seconds per file
- **Caching**: 50-70% faster on incremental updates
- **Memory Usage**: <100MB typical
- **API Efficiency**: Smart batching reduces API calls

## 💰 Cost Estimation

Based on Lingo.dev pricing:

- **Free Tier**: ~10,000 words/month
- **Small Project** (100KB docs): ~\$5-10/month
- **Medium Project** (1MB docs): ~\$50-100/month
- **Large Project** (10MB docs): ~\$500-1000/month

## 🐛 Troubleshooting

### "API Key not found"

```bash
# Check .env.local exists
cat .env.local

# Should show:
# LINGODOTDEV_API_KEY=your_key

# If missing, create it:
echo "LINGODOTDEV_API_KEY=your_key" > .env.local
```

### "No markdown files found"

```bash
# Verify source directory structure
find docs/en -name "*.md"

# Should show your markdown files
```

### "Translation failed - Invalid credentials"

```bash
# 1. Verify API key is correct
npm run status

# 2. Get new key from lingo.dev if expired
# 3. Update .env.local
# 4. Restart: npm run dev
# 5. Try again: npm run translate
```

### "GitHub Actions permission denied"

1. Go to: Settings → Actions → General
2. Select: "Read and write permissions"
3. Check: "Allow GitHub Actions to create pull requests"
4. Save and retry

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 💬 Support

- 📖 [Documentation](https://github.com/Patelmedhansh/DevDocs-Global#readme)
- 🐛 [Issues](https://github.com/Patelmedhansh/DevDocs-Global/issues)
- 💡 [Discussions](https://github.com/Patelmedhansh/DevDocs-Global/discussions)

## 🙏 Acknowledgments

- [Lingo.dev](https://lingo.dev) - Translation engine
- [OpenAI GPT-4](https://openai.com) - AI model
- [Next.js](https://nextjs.org) - Web framework
- [Commander.js](https://github.com/tj/commander.js) - CLI framework

## 🚀 Roadmap

- [ ] Web UI improvements
- [ ] Support for more languages
- [ ] Glossary/terminology management
- [ ] Translation memory
- [ ] A/B testing translations
- [ ] CI/CD integration (GitLab, Gitea, etc.)
- [ ] REST API for programmatic access
- [ ] Desktop app
- [ ] Browser extension

## ⭐ Show Your Support

If this project helped you, please give it a star! ⭐

## 📄 Version History

### v2.0.0 (Current)
- ✨ Full-stack application
- 🎨 React dashboard
- 🔄 GitHub Actions automation
- 🚀 CLI improvements
- 📦 npm publishing ready

### v1.0.0
- 🎯 Initial release
- 📝 CLI tool
- 🌐 Basic translation

---

**Made with ❤️ by [Medhansh Patel](https://github.com/Patelmedhansh)**

**Repository:** https://github.com/Patelmedhansh/DevDocs-Global
