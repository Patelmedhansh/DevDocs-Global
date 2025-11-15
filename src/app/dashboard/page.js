'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Translation <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300">
            View and compare documentation translations side-by-side
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />

            {selectedLanguage !== 'en' && (
              <ScoreBar score={currentTranslation.quality} />
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download ZIP</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
          >
            <div className="bg-gray-800 text-white px-6 py-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h2 className="font-bold text-lg">Original (English)</h2>
              </div>
            </div>
            <div className="h-[600px]">
              <DocViewer doc={englishDoc} title="English" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
          >
            <div className="bg-purple-600 text-white px-6 py-4 border-b border-purple-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <h2 className="font-bold text-lg">
                  Translation ({currentTranslation.title})
                </h2>
              </div>
            </div>
            <div className="h-[600px]">
              <DocViewer doc={currentTranslation} title={selectedLanguage} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-900 border border-purple-600/30 rounded-lg p-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
              💡
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-2">Pro Tip</h3>
              <p className="text-gray-300 leading-relaxed">
                This dashboard updates automatically whenever you push changes to your English documentation.
                No manual intervention needed!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
