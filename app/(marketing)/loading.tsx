export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/2 rounded-lg bg-white/10" />
        <div className="h-4 w-2/3 rounded-lg bg-white/10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 rounded-2xl border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
