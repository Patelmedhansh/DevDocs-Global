'use client';

import { motion } from 'framer-motion';

export default function ScoreBar({ score }) {
  const getColor = (score) => {
    if (score >= 95) return 'from-accent-500 to-accent-600';
    if (score >= 90) return 'from-yellow-400 to-yellow-500';
    return 'from-red-400 to-red-500';
  };

  const getBgColor = (score) => {
    if (score >= 95) return 'bg-accent-100';
    if (score >= 90) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold text-gray-300">Quality Score:</span>
        <div className={`px-3 py-1 rounded-full ${getBgColor(score)}`}>
          <span className={`text-sm font-bold bg-gradient-to-r ${getColor(score)} bg-clip-text text-transparent`}>
            {score}%
          </span>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-full h-3 max-w-xs overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${getColor(score)} shadow-sm relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow"></div>
        </motion.div>
      </div>
    </div>
  );
}
