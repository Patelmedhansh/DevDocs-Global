import { NextResponse } from 'next/server';
import { detectLanguage } from '../../../../cli/languageDetector.js';

/**
 * POST /api/lingo/detect
 * Detects the language of provided text
 */
export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.LINGO_API_KEY;
    const language = await detectLanguage(text, apiKey);

    return NextResponse.json({
      success: true,
      language,
      confidence: 'high'
    });

  } catch (error) {
    console.error('Language detection error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
