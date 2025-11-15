import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * TranslationCache - Manages caching for incremental translations
 * Only re-translates changed files to save costs
 */
export class TranslationCache {
  constructor(cacheDir = './.lingo-cache') {
    this.cacheDir = cacheDir;
    this.ensureDir();
  }

  ensureDir() {
    if (!fs.existsSync(this.cacheDir)) {
      fs.mkdirSync(this.cacheDir, { recursive: true });
    }
  }

  /**
   * Hash content to detect changes
   * @param {string} content - Content to hash
   * @returns {string} SHA256 hash
   */
  hashContent(content) {
    return crypto
      .createHash('sha256')
      .update(content)
      .digest('hex');
  }

  /**
   * Get cached entry
   * @param {string} key - Cache key (file path)
   * @returns {Object|null} Cached data or null
   */
  get(key) {
    const cachePath = path.join(this.cacheDir, this.sanitizeKey(key) + '.json');

    try {
      if (fs.existsSync(cachePath)) {
        return JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      }
    } catch (error) {
      console.error('Cache read error:', error);
    }

    return null;
  }

  /**
   * Set cache entry
   * @param {string} key - Cache key
   * @param {Object} data - Data to cache
   */
  set(key, data) {
    const cachePath = path.join(this.cacheDir, this.sanitizeKey(key) + '.json');

    try {
      fs.writeFileSync(cachePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Cache write error:', error);
    }
  }

  /**
   * Clear all cache
   */
  clear() {
    try {
      const files = fs.readdirSync(this.cacheDir);
      files.forEach(file => {
        fs.unlinkSync(path.join(this.cacheDir, file));
      });
    } catch (error) {
      console.error('Cache clear error:', error);
    }
  }

  /**
   * Get cache statistics
   * @returns {Object} Cache stats
   */
  getStats() {
    try {
      const files = fs.readdirSync(this.cacheDir);
      const totalSize = files.reduce((sum, file) => {
        const stat = fs.statSync(path.join(this.cacheDir, file));
        return sum + stat.size;
      }, 0);

      return {
        entries: files.length,
        size: totalSize,
        sizeKB: (totalSize / 1024).toFixed(2)
      };
    } catch (error) {
      return { entries: 0, size: 0, sizeKB: 0 };
    }
  }

  /**
   * Sanitize key for file name
   * @param {string} key - Key to sanitize
   * @returns {string} Sanitized key
   */
  sanitizeKey(key) {
    return key.replace(/[^a-z0-9]/gi, '_').substring(0, 100);
  }
}
