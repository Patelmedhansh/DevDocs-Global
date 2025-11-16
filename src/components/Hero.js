'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const languages = ['es', 'fr', 'de', 'ja', 'hi', 'zh'];
  const languageNames = {
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    ja: 'Japanese',
    hi: 'Hindi',
    zh: 'Chinese'
  };

  return (
    <div className="relative overflow-hidden bg-black py-24 md:py-32">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-purple-900/30 border border-purple-800 text-purple-300 rounded-full text-sm font-medium mb-4">
              Enterprise-Grade AI Translation Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Translate your documentation into</span>
            <br />
            <span className="gradient-text">6 languages</span>
            <br />
            <span className="text-white">instantly and automatically</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            DevDocs Global integrates GitHub automation with advanced AI translation technology to deliver enterprise-grade multilingual documentation solutions.
            <span className="block mt-2 text-lg text-gray-400">Available as npm package: <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">devdocs-global</code>. Automated workflows ensure consistent, accurate translations with zero manual intervention required.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200"
            >
              <span className="relative z-10 flex items-center">
                View Translation Dashboard
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 hover:text-white rounded-lg border border-gray-700 hover:border-purple-600 transition-colors duration-200"
            >
              Explore Features
            </Link>
          </motion.div>

          {/* Enhanced animated language folders */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-600 transition-colors group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📄</div>
                <div className="text-sm font-bold text-white">docs/en/</div>
                <div className="text-xs text-gray-400 mt-1">Original</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring" }}
                className="hidden md:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-50"></div>
                  <div className="relative text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 font-bold animate-pulse">
                    →
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-purple-600 transition-colors cursor-pointer group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📁</div>
                    <div className="text-xs font-bold text-white">docs/{lang}/</div>
                    <div className="text-xs text-gray-400 mt-1">{languageNames[lang]}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
