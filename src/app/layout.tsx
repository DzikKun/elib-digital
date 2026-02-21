import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Lib Digital",
  description: "Modern Digital Library",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased selection:bg-indigo-200 selection:text-indigo-900`}>
        {/* Floating Navbar */}
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              E-Lib.
            </Link>
            <div className="flex gap-6 font-medium text-sm text-slate-600">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Beranda (SSR)</Link>
              <Link href="/search" className="hover:text-indigo-600 transition-colors">Eksplor (CSR)</Link>
              <Link href="/about" className="hover:text-indigo-600 transition-colors">Tentang (SSG)</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Spacer */}
        <div className="pt-24 pb-12">
          {children}
        </div>
      </body>
    </html>
  );
}