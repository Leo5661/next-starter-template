import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="text-3xl">Next.js Starter Template - @Leocoder</div>
      <div className="font-mono text-lg text-stone-400">
        Next.js + Tailwind + Tailwind linter + SEO
      </div>
    </main>
  );
}
