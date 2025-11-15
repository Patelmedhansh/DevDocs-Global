'use client';

import { motion } from 'framer-motion';

export default function FlowTimeline() {
  const steps = [
    {
      number: 1,
      title: 'Developer Edits English Docs',
      description: 'Update documentation files in docs/en/',
      icon: '✏️',
      time: '10:00 AM'
    },
    {
      number: 2,
      title: 'Push to GitHub',
      description: 'git push triggers GitHub Actions workflow',
      icon: '🚀',
      time: '10:01 AM'
    },
    {
      number: 3,
      title: 'GitHub Actions Detects Change',
      description: 'Automation workflow starts automatically',
      icon: '⚡',
      time: '10:02 AM'
    },
    {
      number: 4,
      title: 'AI Translation',
      description: 'GPT-4 via Lingo translates to 6 languages',
      icon: '🤖',
      time: '10:03 AM'
    },
    {
      number: 5,
      title: 'Generate Translated Files',
      description: 'Creates docs/es/, docs/fr/, docs/de/, etc.',
      icon: '📁',
      time: '10:05 AM'
    },
    {
      number: 6,
      title: 'Auto-Commit & Deploy',
      description: 'Translations committed and dashboard updates',
      icon: '✅',
      time: '10:07 AM'
    }
  ];

  return (
    <div className="relative">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative pb-10"
        >
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-14 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
          )}

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
              {step.number}
            </div>

            <div className="flex-1 bg-white rounded-lg p-5 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <span className="text-sm text-gray-500 font-medium">{step.time}</span>
              </div>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
