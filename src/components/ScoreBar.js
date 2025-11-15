'use client';

import { motion } from 'framer-motion';

export default function ScoreBar({ score }) {
  const getColor = (score) => {
    if (score >= 95) return 'bg-purple-600';
    if (score >= 90) return 'bg-purple-500';
    return 'bg-purple-400';
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-300">Quality Score:</span>
        <div className="px-3 py-1 rounded-lg bg-purple-600/20 border border-purple-600/30">
          <span className="text-sm font-semibold text-purple-400">
            {score}%
          </span>
        </div>
      </div>
      <div className="flex-1 bg-gray-800 rounded-full h-2 max-w-xs overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${getColor(score)}`}
        ></motion.div>
      </div>
    </div>
  );
}
