'use client';
import Link from 'next/link';
import { useState } from 'react';
import { aiTools } from '../data/ai-tools';

export default function HomePage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const categories = Array.from(new Set(aiTools.map(t=>t.category))).sort();
  const filtered = aiTools.filter(t => {
    const matchesQ = !q || (t.name + ' ' + t.description + ' ' + t.category).toLowerCase().includes(q.toLowerCase());
    const matchesC = cat === 'All' || t.category === cat;
    return matchesQ && matchesC;
  });

  return (
    <div>
      <header className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Top AI Tools</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Curated list with links to official docs and APIs.</p>
      </header>

      <div className="flex gap-4 mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools, e.g. chat, image, code..." className="flex-1 rounded-lg border px-4 py-2" />
        <select value={cat} onChange={e=>setCat(e.target.value)} className="rounded-lg border px-3 py-2">
          <option>All</option>
          {categories.map(c=> <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tool) => (
          <Link key={tool.slug} href={`/tools/${tool.slug}`} className="border border-neutral-300 dark:border-neutral-700 rounded-xl p-5 hover:scale-[1.02] transition block">
            <img src={tool.logo} alt={tool.name} className="h-10 mb-3" />
            <h3 className="font-bold text-lg">{tool.name}</h3>
            <p className="text-sm opacity-75">{tool.description}</p>
            <div className="mt-3 text-xs text-gray-500">{tool.freeTier ? 'Free tier available' : 'Paid / limited free'}</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">Showing {filtered.length} tools</div>
    </div>
  );
}
