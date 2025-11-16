import { Inter } from 'next/font/google';
import Link from 'next/link';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevDocs Global - Enterprise AI Translation Platform',
  description: 'Enterprise-grade multilingual documentation solution. Automatically translate technical documentation into 6 languages with advanced AI technology and seamless GitHub integration. Available as npm package: devdocs-global',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gradient-to-b from-black via-gray-950 to-black text-white mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    DevDocs Global
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                    Enterprise-grade multilingual documentation platform. Advanced AI translation technology designed for modern development teams and organizations.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Service Operational</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-6 text-white text-sm uppercase tracking-wider">Technology</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-default">OpenAI GPT-4</span>
                    </li>
                    <li>
                      <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-default">Lingo API</span>
                    </li>
                    <li>
                      <span className="text-gray-400 hover:text-purple-400 transition-colors cursor-default">Next.js & TailwindCSS</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-6 text-white text-sm uppercase tracking-wider">Navigation</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors inline-block">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/features" className="text-gray-400 hover:text-purple-400 transition-colors inline-block">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/automation" className="text-gray-400 hover:text-purple-400 transition-colors inline-block">
                        Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="py-6 border-t border-gray-900/50">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                <p className="text-xs text-gray-500">
                  © 2024 DevDocs Global. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <a href="https://www.npmjs.com/package/devdocs-global" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    npm: devdocs-global
                  </a>
                  <span className="text-gray-700">•</span>
                  <a href="https://github.com/Patelmedhansh/DevDocs-Global" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
