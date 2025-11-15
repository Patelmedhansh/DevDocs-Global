'use client';

import { motion } from 'framer-motion';

export default function FlowTimeline() {
  const steps = [
    {
      number: 1,
      title: 'Developer Edits English Docs',
      description: 'Update documentation files in docs/en/',
      icon: '✏️',
      time: '10:00 AM',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: 'Push to GitHub',
      description: 'git push triggers GitHub Actions workflow',
      icon: '🚀',
      time: '10:01 AM',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      number: 3,
      title: 'GitHub Actions Detects Change',
      description: 'Automation workflow starts automatically',
      icon: '⚡',
      time: '10:02 AM',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      number: 4,
      title: 'AI Translation',
      description: 'GPT-4 via Lingo translates to 6 languages',
      icon: '🤖',
      time: '10:03 AM',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      number: 5,
      title: 'Generate Translated Files',
      description: 'Creates docs/es/, docs/fr/, docs/de/, etc.',
      icon: '📁',
      time: '10:05 AM',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      number: 6,
      title: 'Auto-Commit & Deploy',
      description: 'Translations committed and dashboard updates',
      icon: '✅',
      time: '10:07 AM',
      gradient: 'from-accent-500 to-accent-600'
    }
  ];

  return (
    <div className="relative">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pb-12 group"
        >
          {index < steps.length - 1 && (
            <div className="absolute left-8 top-20 h-full w-0.5 bg-purple-600/30 group-hover:bg-purple-600/50 transition-colors"></div>
          )}

          <div className="flex items-start space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl z-10 relative"
            >
              <span className="relative z-10">{step.number}</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 2 }}
              className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-600 transition-colors group/item"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl transform group-hover/item:scale-105 transition-transform">{step.icon}</span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <span className="text-sm text-gray-300 font-semibold bg-white/10 px-3 py-1 rounded-full">{step.time}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
