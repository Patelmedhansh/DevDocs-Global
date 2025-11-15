import { NextResponse } from 'next/server';
import { getSupportedLanguages } from '../../../../cli/languageDetector.js';

/**
 * GET /api/lingo/languages
 * Returns list of supported languages
 */
export async function GET() {
  try {
    const languages = getSupportedLanguages();

    return NextResponse.json({
      success: true,
      languages,
      total: languages.length
    });

  } catch (error) {
    console.error('Languages fetch error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
