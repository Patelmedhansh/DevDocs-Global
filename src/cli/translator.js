import axios from 'axios';
import chalk from 'chalk';

/**
 * LingoTranslator - Handles all communication with Lingo API
 * Supports translation from any source language to any target language
 */
export class LingoTranslator {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.lingo.ai/v1'; // Lingo API endpoint
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });
  }

  /**
   * Translate text from source language to target language
   * @param {string} text - Text to translate
   * @param {string} sourceLang - Source language code (e.g., 'en', 'es', 'fr')
   * @param {string} targetLang - Target language code
   * @returns {Promise<string>} Translated text
   */
  async translate(text, sourceLang, targetLang) {
    try {
      const response = await this.client.post('/translations/create', {
        text,
        source_language: sourceLang,
        target_language: targetLang,
        model: 'gpt-4-turbo', // Use GPT-4 for best quality
        preserve_formatting: true,
        preserve_code_blocks: true
      });

      if (!response.data.success) {
        throw new Error(response.data.error || 'Translation failed');
      }

      return response.data.translated_text;
    } catch (error) {
      console.error(chalk.red('Lingo API Error: ' + error.message));
      throw error;
    }
  }

  /**
   * Batch translate multiple texts
   * @param {Array<string>} texts - Array of texts to translate
   * @param {string} sourceLang - Source language
   * @param {string} targetLang - Target language
   * @returns {Promise<Array<string>>} Array of translated texts
   */
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
      console.error(chalk.red('Batch translation failed: ' + error.message));
      throw error;
    }
  }

  /**
   * Get quality score for translated content
   * @param {string} original - Original text
   * @param {string} translated - Translated text
   * @returns {Promise<number>} Quality score (0-100)
   */
  async getQualityScore(original, translated) {
    try {
      const response = await this.client.post('/quality/assess', {
        original_text: original,
        translated_text: translated
      });

      return response.data.score;
    } catch (error) {
      console.error(chalk.red('Quality assessment failed: ' + error.message));
      return 0;
    }
  }

  /**
   * List supported languages
   * @returns {Promise<Array>} Array of supported language codes and names
   */
  async getSupportedLanguages() {
    try {
      const response = await this.client.get('/languages');
      return response.data.languages;
    } catch (error) {
      console.error(chalk.red('Failed to fetch languages: ' + error.message));
      return [];
    }
  }

  /**
   * Detect language of given text
   * @param {string} text - Text to detect language
   * @returns {Promise<string>} Language code
   */
  async detectLanguage(text) {
    try {
      const response = await this.client.post('/language/detect', {
        text
      });

      return response.data.language_code;
    } catch (error) {
      console.error(chalk.red('Language detection failed: ' + error.message));
      return 'en'; // Default to English
    }
  }
}
