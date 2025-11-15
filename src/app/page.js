import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why DevDocs Global?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stop manually translating documentation. Let AI do the heavy lifting while you focus on building great products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Translation</h3>
              <p className="text-gray-600">
                From 1 language to 8 languages in seconds. No waiting. No manual work.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Uses GPT-4 for context-aware, accurate translations that preserve technical meaning.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">Fully Automated</h3>
              <p className="text-gray-600">
                GitHub Actions automatically updates translations on every commit. Set it and forget it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perfect for Open Source Projects
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Reach global developers with multilingual docs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Save hundreds of hours on manual translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Keep translations in sync automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Affordable: ~$0.50 for 45,000 words</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Translation Speed</span>
                    <span className="text-sm font-bold text-primary">30 sec</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Accuracy</span>
                    <span className="text-sm font-bold text-primary">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '96%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Cost Savings</span>
                    <span className="text-sm font-bold text-accent">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
