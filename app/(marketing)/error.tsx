"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="text-2xl font-semibold text-white">Something went wrong</div>
      <div className="mt-2 text-sm text-white/70">{error.message}</div>
      <button onClick={reset} className="mt-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">Try again</button>
    </div>
  );
}
