'use client';

export default function ScoreBar({ score }) {
  const getColor = (score) => {
    if (score >= 95) return 'bg-green-500';
    if (score >= 90) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Quality Score:</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2.5 max-w-xs">
        <div
          className={`h-2.5 rounded-full ${getColor(score)} transition-all duration-500`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <span className="text-sm font-bold text-gray-900">{score}%</span>
    </div>
  );
}
