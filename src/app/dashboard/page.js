'use client';

import { useState } from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import DocViewer from '../../components/DocViewer';
import ScoreBar from '../../components/ScoreBar';
import { englishDoc, translations } from '../../data/mockDocs';

export default function Dashboard() {
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const currentTranslation = selectedLanguage === 'en' ? englishDoc : translations[selectedLanguage];

  const handleDownload = () => {
    alert('Downloading all translations as ZIP file...');
    // In real implementation, this would trigger a ZIP download
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Translation Dashboard
          </h1>
          <p className="text-gray-600">
            View and compare documentation translations side-by-side
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />

            {selectedLanguage !== 'en' && (
              <ScoreBar score={currentTranslation.quality} />
            )}

            <button
              onClick={handleDownload}
              className="bg-secondary hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <span>📦</span>
              <span>Download ZIP</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-3">
              <h2 className="font-semibold">Original (English)</h2>
            </div>
            <div className="h-[600px]">
              <DocViewer doc={englishDoc} title="English" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary text-white px-4 py-3">
              <h2 className="font-semibold">
                Translation ({currentTranslation.title})
              </h2>
            </div>
            <div className="h-[600px]">
              <DocViewer doc={currentTranslation} title={selectedLanguage} />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">💡 Pro Tip</h3>
          <p className="text-gray-700">
            This dashboard updates automatically whenever you push changes to your English documentation.
            No manual intervention needed!
          </p>
        </div>
      </div>
    </div>
  );
}
