import { NextResponse } from 'next/server';
import { LingoTranslator } from '../../../../cli/translator.js';
import { DocExtractor } from '../../../../cli/extractor.js';
import { detectLanguage } from '../../../../cli/languageDetector.js';

/**
 * POST /api/lingo/translate
 * 
 * Handles real-time translation requests from the dashboard
 * Accepts document content and target languages
 * Returns translations with quality scores
 */
export async function POST(request) {
  try {
    // Validate API key
    const apiKey = process.env.LINGO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'LINGO_API_KEY not configured' },
        { status: 500 }
      );
    }

    // Parse request body
    const {
      content,
      sourceLanguage = 'auto',
      targetLanguages = ['es', 'fr', 'de', 'ja', 'hi', 'zh']
    } = await request.json();

    // Validate input
    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // Initialize services
    const translator = new LingoTranslator(apiKey);
    const extractor = new DocExtractor();

    // Detect source language if not specified
    let detectedLanguage = sourceLanguage;
    if (sourceLanguage === 'auto') {
      detectedLanguage = await detectLanguage(content, apiKey);
    }

    // Extract translatable text
    const { text, metadata } = extractor.extractText(content);

    // Validate target languages
    const validTargets = targetLanguages.filter(
      lang => lang !== detectedLanguage
    );

    if (validTargets.length === 0) {
      return NextResponse.json(
        { error: 'No valid target languages specified' },
        { status: 400 }
      );
    }

    // Translate to all target languages
    const translations = {};
    const scores = {};

    for (const targetLang of validTargets) {
      try {
        // Translate
        const translatedText = await translator.translate(
          text,
          detectedLanguage,
          targetLang
        );

        // Reconstruct document
        const translatedContent = extractor.reconstructDocument(
          content,
          translatedText,
          metadata
        );

        // Get quality score
        const score = await translator.getQualityScore(text, translatedText);

        translations[targetLang] = translatedContent;
        scores[targetLang] = score;

      } catch (error) {
        console.error(`Translation failed for ${targetLang}:`, error);
        return NextResponse.json(
          { error: `Failed to translate to ${targetLang}: ${error.message}` },
          { status: 500 }
        );
      }
    }

    // Success response
    return NextResponse.json({
      success: true,
      sourceLanguage: detectedLanguage,
      translations,
      scores,
      metadata: {
        sourceWordCount: text.split(/\s+/).length,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Translation API error:', error);
    return NextResponse.json(
      { error: error.message || 'Translation failed' },
      { status: 500 }
    );
  }
}
