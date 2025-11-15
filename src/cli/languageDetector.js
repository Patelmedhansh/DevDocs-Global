import { LingoTranslator } from './translator.js';

const languageNames = {
  'en': 'English',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'ja': 'Japanese',
  'hi': 'Hindi',
  'zh': 'Chinese',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ar': 'Arabic',
  'it': 'Italian',
  'ko': 'Korean',
  'tr': 'Turkish',
  'pl': 'Polish',
  'nl': 'Dutch'
};

/**
 * Detect language of given text using Lingo API
 * Falls back to manual detection if API fails
 * @param {string} text - Text to detect
 * @param {string} apiKey - Lingo API key (optional)
 * @returns {Promise<string>} Language code
 */
export async function detectLanguage(text, apiKey = null) {
  // Try Lingo API if key provided
  if (apiKey) {
    try {
      const translator = new LingoTranslator(apiKey);
      return await translator.detectLanguage(text);
    } catch (error) {
      console.warn('Lingo language detection failed, using fallback');
    }
  }

  // Fallback: Manual detection based on patterns
  return manualDetect(text);
}

/**
 * Manual language detection based on character sets and common words
 * @param {string} text - Text to detect
 * @returns {string} Language code
 */
function manualDetect(text) {
  const sample = text.substring(0, 500).toLowerCase();

  // Check for Chinese characters
  if (/[\u4E00-\u9FFF]/.test(sample)) {
    return 'zh';
  }

  // Check for Japanese
  if (/[\u3040-\u309F\u30A0-\u30FF]/.test(sample)) {
    return 'ja';
  }

  // Check for Korean
  if (/[\uAC00-\uD7AF]/.test(sample)) {
    return 'ko';
  }

  // Check for Arabic
  if (/[\u0600-\u06FF]/.test(sample)) {
    return 'ar';
  }

  // Check for Cyrillic (Russian)
  if (/[\u0400-\u04FF]/.test(sample)) {
    return 'ru';
  }

  // Check for Devanagari (Hindi)
  if (/[\u0900-\u097F]/.test(sample)) {
    return 'hi';
  }

  // Check for common Spanish words
  if (/\b(el|la|de|que|y|a|en|es|por|con|para|su|está)\b/i.test(sample)) {
    return 'es';
  }

  // Check for common French words
  if (/\b(le|la|de|que|et|à|en|est|pour|avec|son|qui)\b/i.test(sample)) {
    return 'fr';
  }

  // Check for common German words
  if (/\b(der|die|und|in|den|von|zu|das|mit|sich|des|auf|für)\b/i.test(sample)) {
    return 'de';
  }

  // Check for common Portuguese words
  if (/\b(o|a|de|que|e|para|é|com|por|uma|dos|se|na|não)\b/i.test(sample)) {
    return 'pt';
  }

  // Default to English
  return 'en';
}

/**
 * Get language name from code
 * @param {string} code - Language code
 * @returns {string} Language name
 */
export function getLanguageName(code) {
  return languageNames[code] || 'Unknown';
}

/**
 * Get all supported languages
 * @returns {Array<Object>} Array of { code, name }
 */
export function getSupportedLanguages() {
  return Object.entries(languageNames).map(([code, name]) => ({
    code,
    name
  }));
}
