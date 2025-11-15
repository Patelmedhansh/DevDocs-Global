'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import DocViewer from './DocViewer';
import ScoreBar from './ScoreBar';

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' }
];

export default function TranslationDashboard() {
  const [docContent, setDocContent] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('auto');
  const [selectedTargetLangs, setSelectedTargetLangs] = useState(['es', 'fr', 'de']);
  const [translations, setTranslations] = useState({});
  const [scores, setScores] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState('es');
  const [detectedLanguage, setDetectedLanguage] = useState(null);
  const [error, setError] = useState(null);

  /**
   * Handle document upload
   */
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setDocContent(event.target.result);
      setError(null);
    };
    reader.readAsText(file);
  };

  /**
   * Detect source language
   */
  const detectLanguageHandler = async () => {
    if (!docContent) {
      setError('Please provide document content first');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/lingo/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: docContent })
      });

      const data = await response.json();
      if (data.success) {
        setDetectedLanguage(data.language);
        setSourceLanguage(data.language);
      }
    } catch (err) {
      setError('Failed to detect language');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Main translation handler - calls backend API
   */
  const handleTranslate = async () => {
    if (!docContent) {
      setError('Please provide document content first');
      return;
    }

    if (selectedTargetLangs.length === 0) {
      setError('Please select at least one target language');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/lingo/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: docContent,
          sourceLanguage: sourceLanguage === 'auto' ? 'auto' : sourceLanguage,
          targetLanguages: selectedTargetLangs
        })
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Translation failed');
        return;
      }

      // Set translations and scores
      setTranslations(data.translations);
      setScores(data.scores);
      setDetectedLanguage(data.sourceLanguage);

      // Auto-select first target language
      if (selectedTargetLangs.length > 0) {
        setCurrentView(selectedTargetLangs[0]);
      }

    } catch (err) {
      setError('Translation request failed: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggle target language selection
   */
  const toggleTargetLanguage = (langCode) => {
    setSelectedTargetLangs(prev =>
      prev.includes(langCode)
        ? prev.filter(l => l !== langCode)
        : [...prev, langCode]
    );
  };

  /**
   * Download translations
   */
  const downloadTranslations = () => {
    const allTranslations = {
      source: {
        language: detectedLanguage,
        content: docContent
      },
      translations: translations,
      scores: scores,
      timestamp: new Date().toISOString()
    };

    const dataStr = JSON.stringify(allTranslations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'translations.json';
    link.click();
  };

  const currentTranslation = translations[currentView];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🌍 Live Translation Dashboard
          </h1>
          <p className="text-gray-600">
            Upload or paste your document. Supports any source language. Translate to multiple languages instantly.
          </p>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            ⚠️ {error}
          </motion.div>
        )}

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-bold mb-4">📄 Document Input</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* File Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary cursor-pointer">
              <input
                type="file"
                accept=".md,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <div className="text-3xl mb-2">📤</div>
                <p className="text-sm text-gray-600">Upload markdown or text file</p>
              </label>
            </div>

            {/* Language Detection */}
            <div className="flex flex-col justify-center">
              {detectedLanguage ? (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600">Detected Language:</p>
                  <p className="text-lg font-bold text-blue-600">{detectedLanguage.toUpperCase()}</p>
                </div>
              ) : (
                <button
                  onClick={detectLanguageHandler}
                  disabled={!docContent || loading}
                  className="bg-secondary hover:bg-cyan-600 disabled:bg-gray-300 text-white px-4 py-3 rounded-lg font-medium transition-all"
                >
                  🔍 Detect Language
                </button>
              )}
            </div>
          </div>

          {/* Content Textarea */}
          <textarea
            value={docContent}
            onChange={(e) => setDocContent(e.target.value)}
            placeholder="Paste your document content here... (supports any language)"
            className="w-full h-40 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </motion.div>

        {/* Language Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-bold mb-4">🗣️ Target Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SUPPORTED_LANGUAGES
              .filter(lang => lang.code !== (sourceLanguage === 'auto' ? detectedLanguage : sourceLanguage))
              .map(lang => (
                <button
                  key={lang.code}
                  onClick={() => toggleTargetLanguage(lang.code)}
                  className={`p-3 rounded-lg border-2 font-medium transition-all ${
                    selectedTargetLangs.includes(lang.code)
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-primary'
                  }`}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
          </div>
        </motion.div>

        {/* Translate Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={handleTranslate}
          disabled={loading || !docContent}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg disabled:opacity-50 text-white font-bold px-6 py-4 rounded-lg mb-6 transition-all transform hover:scale-105"
        >
          {loading ? '🔄 Translating...' : '✨ Translate Now'}
        </motion.button>

        {/* Results Section */}
        {Object.keys(translations).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Source + Translated View */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Source Document */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-3 flex items-center space-x-2">
                  <span>📄</span>
                  <h3 className="font-semibold">Source ({detectedLanguage?.toUpperCase()})</h3>
                </div>
                <div className="h-[600px] overflow-auto p-6 bg-white">
                  <DocViewer doc={{ content: docContent, path: 'source' }} />
                </div>
              </div>

              {/* Translated Document */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary text-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>🌐</span>
                      <select
                        value={currentView}
                        onChange={(e) => setCurrentView(e.target.value)}
                        className="bg-primary text-white font-semibold border-none focus:outline-none cursor-pointer"
                      >
                        {selectedTargetLangs.map(lang => (
                          <option key={lang} value={lang}>
                            {SUPPORTED_LANGUAGES.find(l => l.code === lang)?.flag} {lang.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    </div>
                    {scores[currentView] && (
                      <ScoreBar score={scores[currentView]} />
                    )}
                  </div>
                </div>
                <div className="h-[600px] overflow-auto p-6 bg-white">
                  {currentTranslation && (
                    <DocViewer doc={{ content: currentTranslation, path: 'translated' }} />
                  )}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadTranslations}
              className="w-full bg-accent hover:bg-green-600 text-white font-bold px-6 py-4 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>📦</span>
              <span>Download All Translations</span>
            </button>

            {/* Quality Scores Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">📊 Quality Scores</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(scores).map(([lang, score]) => (
                  <div key={lang} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      {SUPPORTED_LANGUAGES.find(l => l.code === lang)?.flag} {lang.toUpperCase()}
                    </p>
                    <p className="text-2xl font-bold text-primary">{score}%</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
