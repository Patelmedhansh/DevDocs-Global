'use client';

import { motion } from 'framer-motion';
import FeatureCard from '../../components/FeatureCard';

export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'Intelligent Text Extraction',
      description: 'Advanced parsing algorithms extract only translatable content while preserving code blocks, URLs, and markdown structure. Technical documentation integrity maintained throughout the translation process.'
    },
    {
      icon: '💰',
      title: 'Incremental Translation Engine',
      description: 'Optimized translation processing that only handles new or modified content. Initial translation costs approximately $0.50 for 45,000 words, with subsequent updates at minimal cost for maximum operational efficiency.'
    },
    {
      icon: '🤖',
      title: 'Seamless GitHub Integration',
      description: 'One-time configuration enables automatic translation workflows. Every git push triggers translation processing, commit generation, and deployment synchronization without manual intervention.'
    },
    {
      icon: '📊',
      title: 'Quality Assurance Dashboard',
      description: 'Comprehensive visual interface with side-by-side comparison views and quality metrics. Streamlined translation verification with bulk export capabilities via single-click ZIP download.'
    },
    {
      icon: '📦',
      title: 'npm Package & CLI Tool',
      description: 'Install globally or locally via npm: devdocs-global. Full-featured CLI tool for command-line usage and CI/CD pipeline integration. Use from terminal or automate in GitHub Actions workflows.'
    }
  ];

  const stats = [
    { value: '30 sec', label: 'Average Processing Time' },
    { value: '$0.47', label: 'Cost per 45K Words' },
    { value: '96%', label: 'Translation Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Features for <span className="gradient-text">Modern Development Teams</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            DevDocs Global is a comprehensive translation automation platform designed to address the multilingual documentation challenges faced by development teams and organizations worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-lg p-8 md:p-12 mb-16 border border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Technical Example: <span className="gradient-text">Intelligent Text Extraction</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold mb-4 text-white flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Input (English):
              </h3>
              <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm shadow-large border border-gray-800">
                <pre className="whitespace-pre-wrap overflow-x-auto">{"# Getting Started\n\nInstall the package:\n\n```bash\nnpm install @api/sdk\n```\n\nSee [docs](./api.md)\n"}</pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold mb-4 text-white flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                What Gets Translated:
              </h3>
              <div className="bg-gray-800 border border-purple-600/30 p-6 rounded-lg">
                <div className="space-y-3">
                  <p className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2 font-bold">✅</span>
                    <span><strong>"Getting Started"</strong> → Translated</span>
                  </p>
                  <p className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2 font-bold">✅</span>
                    <span><strong>"Install the package"</strong> → Translated</span>
                  </p>
                  <p className="flex items-center text-gray-300">
                    <span className="text-red-400 mr-2 font-bold">❌</span>
                    <span><strong>npm install @api/sdk</strong> → Skipped (code)</span>
                  </p>
                  <p className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2 font-bold">✅</span>
                    <span><strong>"docs"</strong> → Translated</span>
                  </p>
                  <p className="flex items-center text-gray-300">
                    <span className="text-red-400 mr-2 font-bold">❌</span>
                    <span><strong>./api.md</strong> → Skipped (URL)</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-purple-600 text-white p-8 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer group"
            >
              <div className="text-5xl font-bold mb-3 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
