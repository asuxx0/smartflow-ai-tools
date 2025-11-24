import { aiTools } from '../../data/ai-tools';

export function generateMetadata({ params }) {
  const tool = aiTools.find(t=>t.slug===params.slug);
  if (!tool) return { title: 'Tool not found' };
  return {
    title: `${tool.name} — SmartFlow`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} — SmartFlow`,
      description: tool.description,
      url: tool.website
    }
  }
}

export default function ToolPage({ params }) {
  const tool = aiTools.find((t) => t.slug === params.slug);
  if (!tool) return <div>Tool not found.</div>;

  return (
    <div className="max-w-3xl">
      <img src={tool.logo} alt={tool.name} className="h-12 mb-4" />
      <h1 className="text-3xl font-bold">{tool.name}</h1>
      <p className="opacity-80 mt-3 mb-6">{tool.description}</p>

      <div className="flex gap-3 mb-4">
        <a href={tool.website} target="_blank" rel="noreferrer" className="underline text-blue-500">Official Site</a>
        {tool.api && <a href={tool.api} target="_blank" rel="noreferrer" className="underline text-blue-500">API / Docs</a>}
        <a href={`https://www.google.com/search?q=${encodeURIComponent(tool.name + ' ' + tool.category + ' api')}`} target="_blank" rel="noreferrer" className="underline text-blue-500">Search</a>
      </div>

      <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4">
        <strong>Pricing:</strong> <span className="ml-2">{tool.pricing || 'Varies'}</span>
        <br/>
        <strong>Free tier:</strong> <span className="ml-2">{tool.freeTier ? 'Yes' : 'No / Limited'}</span>
      </div>

      {tool.tags && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="flex gap-2 flex-wrap">
            {tool.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{tag}</span>)}
          </div>
        </div>
      )}

      {tool.quickLinks && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Quick links</h3>
          <ul className="list-disc list-inside">
            {tool.quickLinks.map((q, idx) => (
              <li key={idx}><a href={q.url} target="_blank" rel="noreferrer" className="underline text-blue-500">{q.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
