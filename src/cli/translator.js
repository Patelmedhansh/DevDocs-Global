import axios from 'axios';
import chalk from 'chalk';

/**
 * LingoTranslator - Handles all communication with Lingo API
 * Supports translation from any source language to any target language
 */
export class LingoTranslator {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.replexica.com/v1'; // Updated: Use correct endpoint
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 30000,
      httpAgent: require('http').globalAgent,
      httpsAgent: require('https').globalAgent,
    });
  }

  async translate(text, sourceLang, targetLang) {
    try {
      const response = await this.client.post('/translations/create', {
        text,
        source_language: sourceLang,
        target_language: targetLang,
        model: 'gpt-4-turbo',
        preserve_formatting: true,
        preserve_code_blocks: true
      });

      if (!response.data.success) {
        throw new Error(response.data.error || 'Translation failed');
      }

      return response.data.translated_text;
    } catch (error) {
      console.error(chalk.red(`Lingo API Error: ${error.message}`));
      throw error;
    }
  }

  async batchTranslate(texts, sourceLang, targetLang) {
    try {
      const response = await this.client.post('/translations/batch', {
        texts,
        source_language: sourceLang,
        target_language: targetLang,
        model: 'gpt-4-turbo'
      });

      return response.data.translated_texts;
    } catch (error) {
      console.error(chalk.red(`Batch translation failed: ${error.message}`));
      throw error;
    }
  }

  async getQualityScore(original, translated) {
    try {
      const response = await this.client.post('/quality/assess', {
        original_text: original,
        translated_text: translated
      });

      return response.data.score;
    } catch (error) {
      console.error(chalk.red(`Quality assessment failed: ${error.message}`));
      return 0;
    }
  }

  async getSupportedLanguages() {
    try {
      const response = await this.client.get('/languages');
      return response.data.languages;
    } catch (error) {
      console.error(chalk.red(`Failed to fetch languages: ${error.message}`));
      return [];
    }
  }

  async detectLanguage(text) {
    try {
      const response = await this.client.post('/language/detect', {
        text
      });

      return response.data.language_code;
    } catch (error) {
      console.error(chalk.red(`Language detection failed: ${error.message}`));
      return 'en';
    }
  }
}
