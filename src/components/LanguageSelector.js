'use client';

import { languages } from '../data/mockDocs';

export default function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="language" className="text-sm font-medium text-gray-700">
        Language:
      </label>
      <select
        id="language"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="block w-48 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-sm"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
