#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { program } from 'commander';
import chalk from 'chalk';
import { LingoTranslator } from './translator.js';
import { DocExtractor } from './extractor.js';
import { TranslationCache } from './cache.js';
import { detectLanguage } from './languageDetector.js';

const VERSION = '1.0.0';

// Initialize CLI
program
  .name('devdocs-global')
  .description('🌍 Translate your documentation into multiple languages using AI')
  .version(VERSION);

// Init command - Create config
program
  .command('init')
  .description('Initialize DevDocs Global in your project')
  .action(async () => {
    console.log(chalk.blue('\n🚀 Initializing DevDocs Global...\n'));

    const config = {
      sourceLanguage: 'auto', // Auto-detect or specify
      sourceDir: './docs',
      targetLanguages: ['es', 'fr', 'de', 'ja', 'hi', 'zh'],
      outputDir: './docs',
      apiKey: process.env.LINGO_API_KEY || 'your-lingo-api-key',
      cacheDir: './.lingo-cache'
    };

    fs.writeFileSync('devdocs.config.json', JSON.stringify(config, null, 2));
    console.log(chalk.green('✅ Created devdocs.config.json'));
    console.log(chalk.yellow('⚠️  Set LINGO_API_KEY environment variable before running translate command\n'));
  });

// Translate command - Main translation engine
program
  .command('translate')
  .description('Translate documentation to multiple languages')
  .option('-s, --source <language>', 'Source language (auto-detect if not specified)')
  .option('-t, --targets <languages>', 'Target languages (comma-separated)')
  .option('--source-dir <path>', 'Source documentation directory')
  .option('--output-dir <path>', 'Output directory for translations')
  .option('--incremental', 'Only translate changed files')
  .action(async (options) => {
    try {
      console.log(chalk.blue('\n🤖 Starting Translation Process...\n'));

      // Load config
      let config = {
        sourceLanguage: 'auto',
        sourceDir: './docs',
        targetLanguages: ['es', 'fr', 'de', 'ja', 'hi', 'zh'],
        outputDir: './docs',
        apiKey: process.env.LINGO_API_KEY
      };

      if (fs.existsSync('devdocs.config.json')) {
        config = JSON.parse(fs.readFileSync('devdocs.config.json', 'utf-8'));
      }

      // Override with CLI options
      if (options.source) config.sourceLanguage = options.source;
      if (options.targets) config.targetLanguages = options.targets.split(',');
      if (options.sourceDir) config.sourceDir = options.sourceDir;
      if (options.outputDir) config.outputDir = options.outputDir;

      // Validate API key
      if (!config.apiKey) {
        console.log(chalk.red('❌ LINGO_API_KEY not found in environment variables'));
        process.exit(1);
      }

      // Initialize services
      const extractor = new DocExtractor();
      const cache = new TranslationCache(config.cacheDir || './.lingo-cache');
      const translator = new LingoTranslator(config.apiKey);

      // Step 1: Find all source files
      console.log(chalk.cyan('📂 Scanning documentation files...'));
      const sourceFiles = extractor.findMarkdownFiles(config.sourceDir);
      console.log(chalk.green('Found ' + sourceFiles.length + ' markdown files\n'));

      let totalTranslated = 0;

      // Step 2: Process each file
      for (const sourceFile of sourceFiles) {
        console.log(chalk.cyan(`📄 Processing: ${sourceFile}`));

        // Read file content
        const content = fs.readFileSync(sourceFile, 'utf-8');

        // Detect source language if auto
        let detectedLanguage = config.sourceLanguage;
        if (detectedLanguage === 'auto') {
          detectedLanguage = await detectLanguage(content);
          console.log(chalk.gray(`   Detected language: ${detectedLanguage}`));
        }

        // Extract translatable text
        const { text, metadata } = extractor.extractText(content);

        // Check cache for incremental updates
        const fileHash = cache.hashContent(content);
        const cachedTranslations = options.incremental ? cache.get(sourceFile) : null;

        if (cachedTranslations && cachedTranslations.hash === fileHash) {
          console.log(chalk.gray('   ✓ Using cached translations (no changes)\n'));
          continue;
        }

        // Translate to all target languages
        for (const targetLang of config.targetLanguages) {
          if (targetLang === detectedLanguage) {
            console.log(chalk.gray(`   ⊘ Skipping ${targetLang} (same as source)\n`));
            continue;
          }

          try {
            console.log(chalk.yellow(`   🔄 Translating to ${targetLang}...`));

            // Call Lingo API
            const translatedText = await translator.translate(
              text,
              detectedLanguage,
              targetLang
            );

            // Reconstruct document with translations
            const translatedContent = extractor.reconstructDocument(
              content,
              translatedText,
              metadata
            );

            // Write translated file
            const targetPath = sourceFile.replace(
              `/${detectedLanguage}/`,
              `/${targetLang}/`
            );

            const targetDir = path.dirname(targetPath);
            if (!fs.existsSync(targetDir)) {
              fs.mkdirSync(targetDir, { recursive: true });
            }

            fs.writeFileSync(targetPath, translatedContent);
            console.log(chalk.green(`   ✓ ${targetLang}: ${targetPath}\n`));

            totalTranslated++;
          } catch (error) {
            console.log(chalk.red(`   ✗ Failed to translate to ${targetLang}: ${error.message}\n`));
          }
        }

        // Cache this file
        cache.set(sourceFile, { hash: fileHash, timestamp: Date.now() });
      }

      console.log(chalk.green(`\n✅ Translation complete! ${totalTranslated} files translated\n`));

    } catch (error) {
      console.log(chalk.red(`\n❌ Error: ${error.message}\n`));
      process.exit(1);
    }
  });

// Detect command - Detect language of a file
program
  .command('detect <file>')
  .description('Detect the language of a document')
  .action(async (file) => {
    try {
      if (!fs.existsSync(file)) {
        console.log(chalk.red(`File not found: ${file}`));
        process.exit(1);
      }

      const content = fs.readFileSync(file, 'utf-8');
      const language = await detectLanguage(content);
      console.log(chalk.green(`Detected language: ${language}\n`));
    } catch (error) {
      console.log(chalk.red(`Error: ${error.message}\n`));
    }
  });

// Status command - Show translation status
program
  .command('status')
  .description('Show translation status and statistics')
  .action(() => {
    console.log(chalk.blue('\n📊 Translation Status\n'));

    let config = {};
    if (fs.existsSync('devdocs.config.json')) {
      config = JSON.parse(fs.readFileSync('devdocs.config.json', 'utf-8'));
    }

    console.log('Configuration:');
    console.log(`  Source Language: ${config.sourceLanguage || 'auto'}`);
    console.log(`  Target Languages: ${(config.targetLanguages || []).join(', ')}`);
    console.log(`  Source Dir: ${config.sourceDir || './docs'}`);
    console.log(`  Output Dir: ${config.outputDir || './docs'}\n`);

    // Show cache info
    const cacheDir = config.cacheDir || './.lingo-cache';
    if (fs.existsSync(cacheDir)) {
      const cacheFiles = fs.readdirSync(cacheDir);
      console.log(`Cache Status: ${cacheFiles.length} files cached\n`);
    }
  });

program.parse(process.argv);
