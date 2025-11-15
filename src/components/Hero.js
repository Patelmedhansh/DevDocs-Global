'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const languages = ['es', 'fr', 'de', 'ja', 'hi', 'zh'];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Translate your documentation into{' '}
            <span className="text-primary">8 languages</span>
            <br />
            instantly and automatically
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            DevDocs Global combines GitHub automation and AI translation for seamless multilingual documentation.
            No manual work. No delays. Just instant, accurate translations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/dashboard"
              className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Open Live Dashboard →
            </Link>
          </motion.div>

          {/* Animated language folders */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center items-center space-x-4"
          >
            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-primary">
              <div className="text-3xl mb-2">📄</div>
              <div className="text-sm font-medium">docs/en/</div>
            </div>

            <div className="text-4xl text-primary animate-pulse">→</div>

            <div className="grid grid-cols-3 gap-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="bg-secondary/10 p-3 rounded-lg border border-secondary"
                >
                  <div className="text-xl mb-1">📁</div>
                  <div className="text-xs font-medium">docs/{lang}/</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
