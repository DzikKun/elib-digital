export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
      <p className="mt-4 text-lg font-medium text-slate-600">Membuka Perpustakaan Digital...</p>
    </div>
  );
}