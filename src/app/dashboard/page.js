'use client';

import { useState } from 'react';
import { englishDoc, translations } from '../../data/mockDocs';
import TranslationDashboard from '../../components/TranslationDashboard';

export default function Dashboard() {
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const currentTranslation = selectedLanguage === 'en' ? englishDoc : translations[selectedLanguage];

  const handleDownload = () => {
    alert('Downloading all translations as ZIP file...');
    // In real implementation, this would trigger a ZIP download
  };
  return (
    <div>
      <TranslationDashboard />
    </div>
  );
}
