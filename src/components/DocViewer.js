'use client';

import { motion } from 'framer-motion';

export default function DocViewer({ doc, title }) {
  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-xs text-gray-300 font-mono ml-4">{doc.path}</p>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="prose prose-sm max-w-none"
        >
          <div className="bg-gray-800 rounded-lg p-6 shadow-medium border border-gray-700">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-300 overflow-x-auto">
              {doc.content}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
