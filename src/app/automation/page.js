'use client';

import { motion } from 'framer-motion';
import FlowTimeline from '../../components/FlowTimeline';

export default function Automation() {
  const features = [
    { text: 'Preserves Code: Skips all code blocks', icon: '✓' },
    { text: 'Keeps URLs: Links stay unchanged', icon: '✓' },
    { text: 'Maintains Format: Markdown structure intact', icon: '✓' },
    { text: 'Incremental: Only translates changes', icon: '✓' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How <span className="gradient-text">Automation</span> Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how your documentation transforms from English to 6 languages in just 7 minutes — completely automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-lg p-8 md:p-12 mb-12 border border-gray-800"
        >
          <FlowTimeline />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-lg p-8 border border-gray-800"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-white">GitHub Actions Setup</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              One-time workflow configuration that triggers translation on every push to your docs folder.
            </p>
            <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm overflow-x-auto shadow-medium border border-gray-800">
              <pre className="whitespace-pre-wrap">{`name: Auto Translate
on:
  push:
    paths:
      - 'docs/en/**'
jobs:
  translate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx devdocs-global translate
      - run: git add docs/
      - run: git commit -m "🌍 Auto-translate"
      - run: git push`}</pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-lg p-8 border border-gray-800"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-white">Smart Translation</h3>
            </div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-4 group-hover:bg-purple-700 transition-colors">
                    {feature.icon}
                  </span>
                  <span className="text-gray-300 pt-1 leading-relaxed">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-purple-600 text-white rounded-lg p-10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zero Manual Work Required</h2>
            <p className="text-xl mb-6 opacity-90">
              After the initial 2-minute setup, every documentation update is automatically translated and committed.
            </p>
            <div className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg">
              Save 100+ hours per year
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
