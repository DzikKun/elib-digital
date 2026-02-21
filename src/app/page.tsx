
import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';

async function getBooks() {
  const res = await fetch('https://openlibrary.org/subjects/programming.json?limit=6', { cache: 'no-store' });
  return res.json();
}

export default async function HomePage() {
  const data = await getBooks();
  const books = data.works;

  return (
    // Background Terang & Bersih (Off-white / Slate-50)
    <main className="min-h-[90vh] bg-slate-50 text-slate-800 relative overflow-hidden px-6 py-12 lg:py-20">
      
      {/* --- EFEK GLOWING ORBS (Soft, Pucat, Elegan) --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      <div className="absolute top-40 right-40 w-[300px] h-[300px] bg-teal-50/50 rounded-full mix-blend-multiply filter blur-[80px]"></div>
      
      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Bagian Kiri: Tipografi Bersih & Akademis */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Server-Side Rendering
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 min-h-[140px]">
            Koleksi <br/>
            
            {/* Inject CSS Animasi Langsung ke HTML */}
            <style>{`
              @keyframes gantiKata {
                0%, 9% { content: "Fiksi."; }
                10%, 19% { content: "Self-Improvement."; }
                20%, 29% { content: "Sains & Teknologi."; }
                30%, 39% { content: "Biografi."; }
                40%, 49% { content: "Ekonomi & Bisnis."; }
                50%, 59% { content: "Sejarah."; }
                60%, 69% { content: "Agama & Spiritualitas."; }
                70%, 79% { content: "Pendidikan."; }
                80%, 89% { content: "Psikologi."; }
                90%, 100% { content: "Seni & Desain."; }
              }
              @keyframes geserPudar {
                0%, 80% { opacity: 1; transform: translateX(0); }
                85% { opacity: 0; transform: translateX(-15px); }
                90% { opacity: 0; transform: translateX(15px); }
                100% { opacity: 1; transform: translateX(0); }
              }
              .teks-kategori::after {
                content: "Fiksi.";
                animation: gantiKata 30s infinite;
              }
              .animasi-wadah {
                display: inline-block;
                animation: geserPudar 3s infinite;
              }
            `}</style>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-slate-400 font-serif italic font-normal animasi-wadah pr-4">
              <span className="teks-kategori"></span>
            </span>
          </h1>
          
          <p className="text-slate-600 text-lg max-w-md leading-relaxed">
            Eksplorasi literatur pemrograman dengan antarmuka yang bersih, rapi, dan menenangkan untuk fokus membaca yang maksimal.
          </p>
          
          <Link href="/search" className="inline-block px-8 py-4 bg-slate-900 text-white font-medium rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Mulai Membaca →
          </Link>
        </div>

        {/* Bagian Kanan: Light Glassmorphism Card (Sangat Rapi) */}
        <div className="flex-1 w-full max-w-md relative">
          {/* Bayangan Kartu */}
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-slate-200 rounded-[2.5rem] blur-xl opacity-50"></div>
          
          {/* KARTU KACA UTAMA (Frosted White Glass) */}
          <div className="relative bg-white/60 backdrop-blur-2xl border border-white/80 p-8 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] h-[520px] flex flex-col justify-between overflow-hidden group">
            
            <div className="flex justify-between items-start mb-6 border-b border-slate-200/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-serif font-bold text-lg shadow-md">E</div>
                <div>
                  <div className="font-bold tracking-widest text-slate-800 text-sm">ELIB.</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Digital Archive</div>
                </div>
              </div>
            </div>

            {/* Daftar Buku Dinamis */}
            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Bacaan Populer (API)</h3>
              {books.slice(0, 3).map((book: any) => (
                <div key={book.key} className="p-5 bg-white/50 border border-white/60 rounded-2xl hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-md group/card">
                  <h4 className="font-bold text-slate-800 text-lg leading-tight truncate group-hover/card:text-blue-600 transition-colors">{book.title}</h4>
                  <p className="text-sm text-slate-500 mt-1 font-medium">{book.authors?.[0]?.name || 'Unknown'}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 flex justify-between items-center text-xs font-medium text-slate-400">
              <span>Diperbarui 2026</span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> API Aktif
              </span>
            </div>
            
          </div>
        </div>

      </div>
    </main>
  );
}