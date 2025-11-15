'use client';

export default function DocViewer({ doc, title }) {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
        <p className="text-xs text-gray-600 font-mono">{doc.path}</p>
      </div>
      <div className="flex-1 overflow-auto p-6 bg-white">
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
            {doc.content}
          </pre>
        </div>
      </div>
    </div>
  );
}
