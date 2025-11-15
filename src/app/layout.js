import { Inter } from 'next/font/google';
import Link from 'next/link';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevDocs Global - AI-Powered Multilingual Documentation',
  description: 'Translate your documentation into 8 languages instantly using AI automation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-black text-white mt-20 relative overflow-hidden border-t border-gray-800">
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  🌍 DevDocs Global
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Making documentation accessible to everyone, everywhere. AI-powered translation for the modern developer.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-gray-200">Powered By</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>OpenAI GPT-4</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Lingo API</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Next.js & TailwindCSS</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/automation" className="text-gray-400 hover:text-purple-400 transition-colors">
                      Automation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-gray-400">
                  © 2024 DevDocs Global. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>System Operational</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
