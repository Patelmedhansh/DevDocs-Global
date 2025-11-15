'use client';

import { motion } from 'framer-motion';

export default function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
