'use client';

import Hero from '../components/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: '⚡',
      title: 'High-Performance Translation',
      description: 'Transform documentation from one language to six languages in seconds. Enterprise-grade speed with zero manual intervention. Install via npm: devdocs-global',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: '🤖',
      title: 'Advanced AI Technology',
      description: 'Powered by GPT-4 for context-aware, precise translations that maintain technical accuracy and preserve original meaning.',
      gradient: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      icon: '🔄',
      title: 'Complete Automation',
      description: 'GitHub Actions integration automatically processes translations on every commit. Configure once, maintain forever.',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50'
    }
  ];

  const benefits = [
    { text: 'Expand global reach with comprehensive multilingual documentation', icon: '🌍' },
    { text: 'Reduce translation overhead by hundreds of hours annually', icon: '⏱️' },
    { text: 'Maintain translation synchronization across all languages automatically', icon: '🔄' },
    { text: 'Cost-effective pricing: approximately $0.50 per 45,000 words', icon: '💰' }
  ];

  const stats = [
    { label: 'Translation Speed', value: '30 sec', percentage: 95, colorClass: 'text-purple-400' },
    { label: 'Accuracy', value: '96%', percentage: 96, colorClass: 'text-purple-400' },
    { label: 'Cost Savings', value: '99%', percentage: 99, colorClass: 'text-purple-400' }
  ];

  return (
    <div>
      <Hero />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">DevDocs Global</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Eliminate manual translation workflows. Our AI-powered platform handles multilingual documentation while your team focuses on core product development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-600 transition-colors duration-200 group"
              >
                <div>
                  <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ideal for <span className="gradient-text">Enterprise</span> & Open Source Projects
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-xl mr-4 group-hover:bg-purple-700 transition-colors">
                      {benefit.icon}
                    </span>
                    <span className="text-lg text-gray-300 pt-2">{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Performance Metrics
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-300">{stat.label}</span>
                      <span className={`text-sm font-bold ${stat.colorClass}`}>{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                        className="bg-purple-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
