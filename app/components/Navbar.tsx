import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-300 dark:border-neutral-700 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/logos/smartflow.svg" alt="SmartFlow Logo" className="h-8" />
        <h1 className="font-bold text-xl">SmartFlow</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/about" className="text-sm underline">About</Link>
        <Link href="/privacy" className="text-sm underline">Privacy</Link>
      </div>
    </nav>
  );
}
