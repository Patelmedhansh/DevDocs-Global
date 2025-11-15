import { Inter } from 'next/font/google';
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
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">
              Powered by OpenAI GPT-4 and Lingo API | Built with Next.js & TailwindCSS
            </p>
            <p className="text-xs text-gray-400 mt-2">
              © 2024 DevDocs Global. Making documentation accessible to everyone.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
