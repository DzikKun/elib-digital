'use client';

import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const res = await fetch(`https://openlibrary.org/search.json?title=${query}&limit=6`);
    const data = await res.json();
    setResults(data.docs);
    setLoading(false);
  };

  return (
    <main className="min-h-[90vh] bg-slate-50 text-slate-800 relative overflow-hidden px-6 py-12 lg:py-20">
      {/* --- EFEK GLOWING ORBS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="w-full text-center mb-12 block">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/80 border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
            Client-Side Rendering
          </div>
          <h1 className="block text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 w-full">
            Eksplorasi <span className="text-blue-600 font-serif italic font-normal">Pustaka.</span>
          </h1>
          <p className="block text-slate-600 max-w-xl mx-auto text-center">
            Temukan literatur dunia dalam hitungan detik dengan pencarian interaktif tanpa muat ulang halaman.
          </p>
        </div>

        {/* Modern Glass Search Bar */}
        <form onSubmit={handleSearch} className="w-full relative group mb-12">
          <input 
            type="text" 
            placeholder="Ketik judul buku, misal: 'Clean Code'..."
            className="w-full pl-8 pr-32 py-5 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2rem] text-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 text-slate-700 font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-3 top-3 bottom-3 bg-slate-900 hover:bg-slate-800 text-white px-8 rounded-[1.5rem] font-medium transition-all shadow-md hover:shadow-lg disabled:bg-slate-400"
          >
            {loading ? 'Mencari...' : 'Temukan'}
          </button>
        </form>

        {/* Results Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((book: any, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-[2rem] shadow-sm hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all flex flex-col justify-between group cursor-pointer">
              <div>
                <h2 className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors leading-tight mb-2">{book.title}</h2>
                <p className="text-slate-500 text-sm font-medium">{book.author_name?.[0] || 'Penulis Anonim'}</p>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-slate-200/50 pt-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tahun: {book.first_publish_year || '-'}</span>
                <span className="text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">Detail →</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}