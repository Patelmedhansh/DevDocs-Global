import FlowTimeline from '../../components/FlowTimeline';

export default function Automation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Automation Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how your documentation transforms from English to 6 languages in just 7 minutes — completely automatically.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <FlowTimeline />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">⚙️ GitHub Actions Setup</h3>
            <p className="text-gray-600 mb-4">
              One-time workflow configuration that triggers translation on every push to your docs folder.
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre>{`name: Auto Translate
on:
  push:
    paths:
      - 'docs/en/**'
jobs:
  translate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx devdocs-global translate
      - run: git add docs/
      - run: git commit -m "🌍 Auto-translate"
      - run: git push`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900">🎯 Smart Translation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                <span><strong>Preserves Code:</strong> Skips all code blocks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                <span><strong>Keeps URLs:</strong> Links stay unchanged</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                <span><strong>Maintains Format:</strong> Markdown structure intact</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                <span><strong>Incremental:</strong> Only translates changes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Zero Manual Work Required</h2>
          <p className="text-lg mb-4">
            After the initial 2-minute setup, every documentation update is automatically translated and committed.
          </p>
          <div className="inline-block bg-white text-primary px-6 py-2 rounded-full font-bold">
            Save 100+ hours per year
          </div>
        </div>
      </div>
    </div>
  );
}
