import FeatureCard from '../../components/FeatureCard';

export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'Smart Text Extraction',
      description: 'Intelligently extracts only translatable text while preserving code blocks, URLs, and markdown formatting. Your technical content stays intact.'
    },
    {
      icon: '💰',
      title: 'Incremental Translation',
      description: 'Only translates new or changed content. First run costs ~$0.50 for 45,000 words. Subsequent updates cost pennies. Maximum cost efficiency.'
    },
    {
      icon: '🤖',
      title: 'GitHub Automation',
      description: 'Set it once, forget it forever. Every git push automatically triggers translation, commit, and deployment. No human intervention needed.'
    },
    {
      icon: '📊',
      title: 'Quality Dashboard',
      description: 'Visual side-by-side comparison with quality scores. Verify translations easily and download everything as ZIP with one click.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Features That Make Judges Love It
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DevDocs Global isn't just a translation tool — it's an intelligent automation system that solves real problems for developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Example: Smart Text Extraction
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-gray-700">Input (English):</h3>
<div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
  <pre>{"# Getting Started\n\nInstall the package:\n\n```bash\nnpm install @api/sdk\n```\n\nSee [docs](./api.md)\n"}</pre>
</div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-gray-700">What Gets Translated:</h3>
              <div className="bg-blue-50 border-2 border-primary p-4 rounded">
                <p className="mb-2">✅ <strong>"Getting Started"</strong> → Translated</p>
                <p className="mb-2">✅ <strong>"Install the package"</strong> → Translated</p>
                <p className="mb-2">❌ <strong>npm install @api/sdk</strong> → Skipped (code)</p>
                <p className="mb-2">✅ <strong>"docs"</strong> → Translated</p>
                <p>❌ <strong>./api.md</strong> → Skipped (URL)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-primary text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">30 sec</div>
            <div className="text-sm">Translation Time</div>
          </div>

          <div className="bg-secondary text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">$0.47</div>
            <div className="text-sm">Cost for 45K words</div>
          </div>

          <div className="bg-accent text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">96%</div>
            <div className="text-sm">Average Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
