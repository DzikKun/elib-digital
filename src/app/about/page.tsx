export const metadata = {
  title: 'Tentang - E-Lib Digital',
};

export default function AboutPage() {
  return (
    <main className="min-h-[90vh] bg-slate-50 text-slate-800 relative overflow-hidden px-6 py-12 lg:py-20 flex items-center">
      {/* --- EFEK GLOWING ORBS --- */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-[100px]"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-teal-100/50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md">
            Static Site Generation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Tentang <span className="text-blue-600 font-serif italic font-normal">Platform.</span>
          </h1>
        </div>

        {/* Large Glass Panel */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white/80 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            
            {/* Kiri: Misi */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg mb-6 group-hover:rotate-12 transition-transform">E</div>
              <h2 className="text-2xl font-bold text-slate-800">Misi Kami</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                E-Lib Digital dibangun untuk mendemonstrasikan kekuatan arsitektur modern dalam menyajikan informasi. Kami menggabungkan kecepatan Next.js, estetika UI/UX, dan fungsionalitas dalam satu wadah arsip digital.
              </p>
            </div>
            
            {/* Kanan: Teknologi */}
            <div className="space-y-6 md:border-l border-slate-200/50 md:pl-12">
              <h2 className="text-2xl font-bold text-slate-800">Teknologi Web</h2>
              <ul className="space-y-5 mt-4">
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-100">1</span>
                  <div>
                    <p className="font-bold text-slate-800 leading-tight">Next.js App Router</p>
                    <p className="text-sm text-slate-500">Framework untuk SSR, CSR, dan SSG.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm border border-purple-100">2</span>
                  <div>
                    <p className="font-bold text-slate-800 leading-tight">Tailwind CSS</p>
                    <p className="text-sm text-slate-500">Desain Glassmorphism modern & responsif.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm border border-emerald-100">3</span>
                  <div>
                    <p className="font-bold text-slate-800 leading-tight">Open Library API</p>
                    <p className="text-sm text-slate-500">Sumber data dinamis publik terpercaya.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}