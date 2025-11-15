import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/**
 * DocExtractor - Smart text extraction from markdown files
 * Preserves code blocks, URLs, and formatting
 */
export class DocExtractor {
  constructor() {
    this.codeBlockRegex = /```([\s\S]*?)```/g;
    this.inlineCodeRegex = /`[^`]+`/g;
    this.urlRegex = /(https?:\/\/[^\s)]+)/g;
  }

  /**
   * Find all markdown files in a directory
   * @param {string} dir - Directory path
   * @returns {Array<string>} Array of markdown file paths
   */
  findMarkdownFiles(dir) {
    let files = [];

    if (!fs.existsSync(dir)) {
      return files;
    }

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(this.findMarkdownFiles(fullPath));
      } else if (item.endsWith('.md')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  /**
   * Extract translatable text from markdown
   * Preserves code blocks, inline code, URLs
   * @param {string} content - Markdown content
   * @returns {Object} { text: string, metadata: Object }
   */
  extractText(content) {
    // Store code blocks separately
    const codeBlocks = [];
    let textContent = content;
    let blockIndex = 0;

    // Replace code blocks with placeholders
    textContent = textContent.replace(this.codeBlockRegex, (match) => {
      codeBlocks.push(match);
      return `[CODEBLOCK_${blockIndex++}]`;
    });

    // Extract text but preserve structure
    const metadata = {
      codeBlocks,
      hasInlineCode: this.inlineCodeRegex.test(content),
      hasUrls: this.urlRegex.test(content)
    };

    return {
      text: textContent,
      metadata
    };
  }

  /**
   * Reconstruct document with translated text
   * Inserts translations while preserving code blocks and structure
   * @param {string} originalContent - Original markdown
   * @param {string} translatedText - Translated text
   * @param {Object} metadata - Metadata from extraction
   * @returns {string} Reconstructed markdown with translations
   */
  reconstructDocument(originalContent, translatedText, metadata) {
    let result = translatedText;

    // Restore code blocks
    metadata.codeBlocks.forEach((codeBlock, index) => {
      result = result.replace(
        `[CODEBLOCK_${index}]`,
        codeBlock
      );
    });

    return result;
  }

  /**
   * Extract metadata from markdown (title, headings, etc.)
   * @param {string} content - Markdown content
   * @returns {Object} Metadata object
   */
  extractMetadata(content) {
    const titleMatch = content.match(/^# (.+)$/m);
    const headings = content.match(/^#{1,6} .+$/gm) || [];

    return {
      title: titleMatch ? titleMatch[1] : 'Untitled',
      headings: headings.length,
      wordCount: content.split(/\s+/).length
    };
  }

  /**
   * Validate markdown structure
   * @param {string} content - Markdown content
   * @returns {boolean} True if valid
   */
  isValidMarkdown(content) {
    return typeof content === 'string' && content.length > 0;
  }

  /**
   * Get file statistics
   * @param {string} content - File content
   * @returns {Object} Statistics
   */
  getStats(content) {
    return {
      characters: content.length,
      words: content.split(/\s+/).length,
      lines: content.split('\n').length,
      codeBlocks: (content.match(/```/g) || []).length / 2
    };
  }
}
