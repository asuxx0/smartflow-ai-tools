// Enhanced ai-tools list for SmartFlow (with pricing, tags, quickLinks)
export interface AITool {
  name: string;
  slug: string;
  category: string;
  description: string;
  website: string;
  api?: string;
  freeTier?: boolean;
  logo?: string;
  pricing?: string;
  tags?: string[];
  quickLinks?: { label: string; url: string }[];
}

export const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "Chatbot",
    description: "OpenAI's conversational AI for text, code, and more.",
    website: "https://chat.openai.com",
    api: "https://platform.openai.com/docs",
    freeTier: false,
    logo: "/logos/chatgpt.svg",
    pricing: "Paid (Free tier limited)",
    tags: ["chat", "general", "code"],
    quickLinks: [
      { label: "Docs", url: "https://platform.openai.com/docs" },
      { label: "Website", url: "https://chat.openai.com" },
    ]
  },
  {
    name: "GPT-4o",
    slug: "gpt-4o",
    category: "Models",
    description: "OpenAI's latest family of models for high-quality generation.",
    website: "https://platform.openai.com",
    api: "https://platform.openai.com/docs",
    freeTier: false,
    logo: "/logos/gpt4o.svg",
    pricing: "Paid",
    tags: ["model", "general"],
    quickLinks: [
      { label: "Docs", url: "https://platform.openai.com/docs" },
    ]
  },
  {
    name: "Gemini",
    slug: "gemini",
    category: "Chatbot",
    description: "Google's multimodal LLM family (Gemini).",
    website: "https://gemini.google.com",
    api: "https://ai.google.dev/",
    freeTier: true,
    logo: "/logos/gemini.svg",
    pricing: "Free tier available",
    tags: ["chat", "multimodal"],
    quickLinks: [
      { label: "Docs", url: "https://ai.google.dev/" },
      { label: "Website", url: "https://gemini.google.com" },
    ]
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Chatbot",
    description: "Anthropic's Claude models for safety-focused chat.",
    website: "https://claude.ai",
    api: "https://docs.anthropic.com/claude",
    freeTier: true,
    logo: "/logos/claude.svg",
    pricing: "Free tier available",
    tags: ["chat", "safety"],
    quickLinks: [
      { label: "Docs", url: "https://docs.anthropic.com/claude" },
      { label: "Website", url: "https://claude.ai" },
    ]
  },
  {
    name: "Hugging Face",
    slug: "huggingface",
    category: "Models",
    description: "Model hub and inference API for open models.",
    website: "https://huggingface.co",
    api: "https://huggingface.co/docs/api-inference",
    freeTier: true,
    logo: "/logos/huggingface.svg",
    pricing: "Free tier (community)",
    tags: ["models", "hosting"],
    quickLinks: [
      { label: "Docs", url: "https://huggingface.co/docs/api-inference" },
      { label: "Website", url: "https://huggingface.co" },
    ]
  },
  {
    name: "Cohere",
    slug: "cohere",
    category: "Models",
    description: "Text and embedding models for developers.",
    website: "https://cohere.ai",
    api: "https://docs.cohere.ai",
    freeTier: true,
    logo: "/logos/cohere.svg",
    pricing: "Free tier",
    tags: ["embeddings", "text"],
    quickLinks: [
      { label: "Docs", url: "https://docs.cohere.ai" },
      { label: "Website", url: "https://cohere.ai" },
    ]
  },
  {
    name: "Anthropic",
    slug: "anthropic",
    category: "Models",
    description: "Provider of Claude family and safety-oriented models.",
    website: "https://www.anthropic.com",
    api: "https://docs.anthropic.com/",
    freeTier: false,
    logo: "/logos/anthropic.svg",
    pricing: "Paid / varies",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://www.anthropic.com" },
    ]
  },
  {
    name: "OpenRouter",
    slug: "openrouter",
    category: "API",
    description: "Unified API to access many LLM backends.",
    website: "https://openrouter.ai",
    api: "https://openrouter.ai/docs",
    freeTier: true,
    logo: "/logos/openrouter.svg",
    pricing: "Free models available",
    tags: ["api", "unified"],
    quickLinks: [
      { label: "Docs", url: "https://openrouter.ai/docs" },
      { label: "Website", url: "https://openrouter.ai" },
    ]
  },
  {
    name: "H2O.ai",
    slug: "h2o",
    category: "Models",
    description: "Open-source AI platform with models and tools.",
    website: "https://www.h2o.ai",
    api: "https://docs.h2o.ai/",
    freeTier: true,
    logo: "/logos/h2o.svg",
    pricing: "Paid / varies",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://www.h2o.ai" },
    ]
  },
  {
    name: "Mistral AI",
    slug: "mistral",
    category: "Models",
    description: "High-performance open models from Mistral.",
    website: "https://www.mistral.ai",
    api: "https://www.mistral.ai",
    freeTier: true,
    logo: "/logos/mistral.svg",
    pricing: "Free / open",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://www.mistral.ai" },
    ]
  },
  {
    name: "Llama 2",
    slug: "llama-2",
    category: "Models",
    description: "Meta's open-weight language model family.",
    website: "https://ai.meta.com/llama",
    api: "https://huggingface.co/models?search=llama",
    freeTier: true,
    logo: "/logos/llama2.svg",
    pricing: "Open weights",
    tags: ["models", "open"],
    quickLinks: [
      { label: "HuggingFace", url: "https://huggingface.co/models?search=llama" },
    ]
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    category: "Search",
    description: "AI-powered search and assistant.",
    website: "https://www.perplexity.ai",
    api: "https://www.perplexity.ai",
    freeTier: true,
    logo: "/logos/perplexity.svg",
    pricing: "Free with limits",
    tags: ["search", "assistant"],
    quickLinks: [
      { label: "Website", url: "https://www.perplexity.ai" },
    ]
  },
  {
    name: "Bard",
    slug: "bard",
    category: "Chatbot",
    description: "Google's Bard conversational assistant.",
    website: "https://bard.google.com",
    api: "https://ai.google/",
    freeTier: true,
    logo: "/logos/bard.svg",
    pricing: "Free",
    tags: ["chat"],
    quickLinks: [
      { label: "Website", url: "https://bard.google.com" },
    ]
  },
  {
    name: "Jasper",
    slug: "jasper",
    category: "Productivity",
    description: "AI writing assistant for marketing and content.",
    website: "https://www.jasper.ai",
    api: "https://www.jasper.ai",
    freeTier: false,
    logo: "/logos/jasper.svg",
    pricing: "Paid / varies",
    tags: ["productivity"],
    quickLinks: [
      { label: "Website", url: "https://www.jasper.ai" },
    ]
  },
  {
    name: "Writesonic",
    slug: "writesonic",
    category: "Productivity",
    description: "AI writing and content generation platform.",
    website: "https://writesonic.com",
    api: "https://writesonic.com",
    freeTier: true,
    logo: "/logos/writesonic.svg",
    pricing: "Paid / varies",
    tags: ["productivity"],
    quickLinks: [
      { label: "Website", url: "https://writesonic.com" },
    ]
  },
  {
    name: "Runway",
    slug: "runway",
    category: "Image",
    description: "AI tools for video and image generation and editing.",
    website: "https://runwayml.com",
    api: "https://docs.runwayml.com/",
    freeTier: true,
    logo: "/logos/runway.svg",
    pricing: "Paid / varies",
    tags: ["image"],
    quickLinks: [
      { label: "Website", url: "https://runwayml.com" },
    ]
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "Image",
    description: "Image generation through Discord-based workflow.",
    website: "https://www.midjourney.com",
    api: undefined,
    freeTier: false,
    logo: "/logos/midjourney.svg",
    pricing: "Paid / varies",
    tags: ["image"],
    quickLinks: [
      { label: "Website", url: "https://www.midjourney.com" },
    ]
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    category: "Image",
    description: "Open-source image models and community forks.",
    website: "https://stability.ai",
    api: "https://platform.stability.ai/docs",
    freeTier: true,
    logo: "/logos/stablediffusion.svg",
    pricing: "Paid / varies",
    tags: ["image"],
    quickLinks: [
      { label: "Website", url: "https://stability.ai" },
    ]
  },
  {
    name: "DALL\u00b7E",
    slug: "dalle",
    category: "Image",
    description: "OpenAI's image generation model.",
    website: "https://labs.openai.com",
    api: "https://platform.openai.com/docs/guides/images",
    freeTier: false,
    logo: "/logos/dalle.svg",
    pricing: "Paid / varies",
    tags: ["image"],
    quickLinks: [
      { label: "Website", url: "https://labs.openai.com" },
    ]
  },
  {
    name: "DeepL",
    slug: "deepl",
    category: "Translation",
    description: "High-quality neural translations.",
    website: "https://www.deepl.com",
    api: "https://www.deepl.com/docs-api",
    freeTier: true,
    logo: "/logos/deepl.svg",
    pricing: "Paid / varies",
    tags: ["translation"],
    quickLinks: [
      { label: "Website", url: "https://www.deepl.com" },
    ]
  },
  {
    name: "Replit Ghostwriter",
    slug: "replit-ghostwriter",
    category: "Coding",
    description: "AI coding assistant embedded in Replit.",
    website: "https://replit.com",
    api: "https://replit.com/docs",
    freeTier: true,
    logo: "/logos/replit.svg",
    pricing: "Paid / varies",
    tags: ["coding"],
    quickLinks: [
      { label: "Website", url: "https://replit.com" },
    ]
  },
  {
    name: "GitHub Copilot",
    slug: "copilot",
    category: "Coding",
    description: "AI code completion in editors.",
    website: "https://github.com/features/copilot",
    api: "https://docs.github.com/en/copilot",
    freeTier: false,
    logo: "/logos/copilot.svg",
    pricing: "Paid / varies",
    tags: ["coding"],
    quickLinks: [
      { label: "Website", url: "https://github.com/features/copilot" },
    ]
  },
  {
    name: "SwellAI",
    slug: "swellai",
    category: "API",
    description: "LLM API provider.",
    website: "https://swellai.com",
    api: "https://docs.swellai.com",
    freeTier: true,
    logo: "/logos/swellai.svg",
    pricing: "Paid / varies",
    tags: ["api"],
    quickLinks: [
      { label: "Website", url: "https://swellai.com" },
    ]
  },
  {
    name: "EleutherAI",
    slug: "eleutherai",
    category: "Models",
    description: "Open research org with open models.",
    website: "https://www.eleuther.ai",
    api: "https://huggingface.co/models",
    freeTier: true,
    logo: "/logos/eleuther.svg",
    pricing: "Paid / varies",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://www.eleuther.ai" },
    ]
  },
  {
    name: "DeepMind Sparrow",
    slug: "sparrow",
    category: "Research",
    description: "DeepMind's conversational research agent.",
    website: "https://deepmind.com",
    api: undefined,
    freeTier: false,
    logo: "/logos/deepmind.svg",
    pricing: "Paid / varies",
    tags: ["research"],
    quickLinks: [
      { label: "Website", url: "https://deepmind.com" },
    ]
  },
  {
    name: "Claude Instant",
    slug: "claude-instant",
    category: "Chatbot",
    description: "Smaller, cheaper Claude models for fast replies.",
    website: "https://claude.ai",
    api: "https://docs.anthropic.com/claude",
    freeTier: true,
    logo: "/logos/claude-instant.svg",
    pricing: "Paid / varies",
    tags: ["chatbot"],
    quickLinks: [
      { label: "Website", url: "https://claude.ai" },
    ]
  },
  {
    name: "Vercel AI",
    slug: "vercel-ai",
    category: "Platform",
    description: "Vercel's AI SDK and server-side helpers.",
    website: "https://vercel.com/ai",
    api: "https://vercel.com/docs/ai",
    freeTier: true,
    logo: "/logos/vercel.svg",
    pricing: "Paid / varies",
    tags: ["platform"],
    quickLinks: [
      { label: "Website", url: "https://vercel.com/ai" },
    ]
  },
  {
    name: "HuggingChat",
    slug: "huggingchat",
    category: "Chatbot",
    description: "Hugging Face's chat interface backed by community models.",
    website: "https://huggingchat.co",
    api: "https://huggingface.co",
    freeTier: true,
    logo: "/logos/huggingchat.svg",
    pricing: "Paid / varies",
    tags: ["chatbot"],
    quickLinks: [
      { label: "Website", url: "https://huggingchat.co" },
    ]
  },
  {
    name: "MosaicML",
    slug: "mosaicml",
    category: "Models",
    description: "Train and deploy large models at scale.",
    website: "https://www.mosaicml.com",
    api: "https://www.mosaicml.com/docs",
    freeTier: false,
    logo: "/logos/mosaicml.svg",
    pricing: "Paid / varies",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://www.mosaicml.com" },
    ]
  },
  {
    name: "Aleph Alpha",
    slug: "aleph",
    category: "Models",
    description: "European LLM provider with multimodal models.",
    website: "https://www.aleph-alpha.com",
    api: "https://www.aleph-alpha.com/docs",
    freeTier: false,
    logo: "/logos/aleph.svg",
    pricing: "Paid / varies",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://www.aleph-alpha.com" },
    ]
  },
  {
    name: "SageMaker JumpStart",
    slug: "sagemaker",
    category: "Platform",
    description: "AWS model marketplace and deployment tools.",
    website: "https://aws.amazon.com/sagemaker",
    api: "https://docs.aws.amazon.com/sagemaker",
    freeTier: false,
    logo: "/logos/sagemaker.svg",
    pricing: "Paid / varies",
    tags: ["platform"],
    quickLinks: [
      { label: "Website", url: "https://aws.amazon.com/sagemaker" },
    ]
  },
  {
    name: "Perplexity Plugins",
    slug: "perplexity-plugins",
    category: "Plugins",
    description: "Extend Perplexity with plugins and agents.",
    website: "https://www.perplexity.ai",
    api: "https://www.perplexity.ai",
    freeTier: true,
    logo: "/logos/perplexity-plugins.svg",
    pricing: "Paid / varies",
    tags: ["plugins"],
    quickLinks: [
      { label: "Website", url: "https://www.perplexity.ai" },
    ]
  },
  {
    name: "Spell",
    slug: "spell",
    category: "Platform",
    description: "MLOps platform for training and serving models.",
    website: "https://spell.ml",
    api: "https://spell.ml/docs",
    freeTier: true,
    logo: "/logos/spell.svg",
    pricing: "Paid / varies",
    tags: ["platform"],
    quickLinks: [
      { label: "Website", url: "https://spell.ml" },
    ]
  },
  {
    name: "Civitai",
    slug: "civitai",
    category: "Models",
    description: "Community platform for model checkpoints (images).",
    website: "https://civitai.com",
    api: "https://civitai.com",
    freeTier: true,
    logo: "/logos/civitai.svg",
    pricing: "Paid / varies",
    tags: ["models"],
    quickLinks: [
      { label: "Website", url: "https://civitai.com" },
    ]
  },
  {
    name: "Snyk AI",
    slug: "snyk-ai",
    category: "Security",
    description: "Security scanning for AI pipelines.",
    website: "https://snyk.io",
    api: "https://docs.snyk.io",
    freeTier: true,
    logo: "/logos/snyk.svg",
    pricing: "Paid / varies",
    tags: ["security"],
    quickLinks: [
      { label: "Website", url: "https://snyk.io" },
    ]
  },
  {
    name: "AssemblyAI",
    slug: "assemblyai",
    category: "Speech",
    description: "Speech-to-text and audio intelligence.",
    website: "https://www.assemblyai.com",
    api: "https://www.assemblyai.com/docs",
    freeTier: true,
    logo: "/logos/assemblyai.svg",
    pricing: "Paid / varies",
    tags: ["speech"],
    quickLinks: [
      { label: "Website", url: "https://www.assemblyai.com" },
    ]
  },
  {
    name: "Descript",
    slug: "descript",
    category: "Audio",
    description: "Audio & video editing with AI tools.",
    website: "https://www.descript.com",
    api: "https://www.descript.com",
    freeTier: true,
    logo: "/logos/descript.svg",
    pricing: "Paid / varies",
    tags: ["audio"],
    quickLinks: [
      { label: "Website", url: "https://www.descript.com" },
    ]
  },
  {
    name: "Hume",
    slug: "hume",
    category: "Emotion",
    description: "Affective AI for emotion recognition.",
    website: "https://www.hume.ai",
    api: "https://www.hume.ai/docs",
    freeTier: false,
    logo: "/logos/hume.svg",
    pricing: "Paid / varies",
    tags: ["emotion"],
    quickLinks: [
      { label: "Website", url: "https://www.hume.ai" },
    ]
  },
  {
    name: "Replicate",
    slug: "replicate",
    category: "Platform",
    description: "Run community ML models via API.",
    website: "https://replicate.com",
    api: "https://replicate.com/docs",
    freeTier: true,
    logo: "/logos/replicate.svg",
    pricing: "Paid / varies",
    tags: ["platform"],
    quickLinks: [
      { label: "Website", url: "https://replicate.com" },
    ]
  },
  {
    name: "Clarifai",
    slug: "clarifai",
    category: "Vision",
    description: "Computer vision and multimodal APIs.",
    website: "https://www.clarifai.com",
    api: "https://docs.clarifai.com",
    freeTier: true,
    logo: "/logos/clarifai.svg",
    pricing: "Paid / varies",
    tags: ["vision"],
    quickLinks: [
      { label: "Website", url: "https://www.clarifai.com" },
    ]
  },
  {
    name: "Spellbook",
    slug: "spellbook",
    category: "Legal",
    description: "AI for contract analysis and legal docs.",
    website: "https://www.spellbook.ai",
    api: "https://www.spellbook.ai",
    freeTier: false,
    logo: "/logos/spellbook.svg",
    pricing: "Paid / varies",
    tags: ["legal"],
    quickLinks: [
      { label: "Website", url: "https://www.spellbook.ai" },
    ]
  },
  {
    name: "Talk to Books",
    slug: "talktobooks",
    category: "Search",
    description: "Semantic book search using embeddings.",
    website: "https://books.google.com/talktobooks",
    api: undefined,
    freeTier: true,
    logo: "/logos/talktobooks.svg",
    pricing: "Paid / varies",
    tags: ["search"],
    quickLinks: [
      { label: "Website", url: "https://books.google.com/talktobooks" },
    ]
  },
  {
    name: "Whisper",
    slug: "whisper",
    category: "Speech",
    description: "OpenAI's speech-to-text open model.",
    website: "https://openai.com/research/whisper",
    api: "https://platform.openai.com/docs/guides/speech-to-text",
    freeTier: true,
    logo: "/logos/whisper.svg",
    pricing: "Paid / varies",
    tags: ["speech"],
    quickLinks: [
      { label: "Website", url: "https://openai.com/research/whisper" },
    ]
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    category: "Video",
    description: "AI video generation from text.",
    website: "https://www.synthesia.io",
    api: "https://www.synthesia.io",
    freeTier: false,
    logo: "/logos/synthesia.svg",
    pricing: "Paid / varies",
    tags: ["video"],
    quickLinks: [
      { label: "Website", url: "https://www.synthesia.io" },
    ]
  },
  {
    name: "Character.AI",
    slug: "characterai",
    category: "Chatbot",
    description: "Create and chat with custom characters.",
    website: "https://beta.character.ai",
    api: undefined,
    freeTier: true,
    logo: "/logos/characterai.svg",
    pricing: "Paid / varies",
    tags: ["chatbot"],
    quickLinks: [
      { label: "Website", url: "https://beta.character.ai" },
    ]
  },
  {
    name: "Otter.ai",
    slug: "otter",
    category: "Productivity",
    description: "Meeting notes and transcription AI.",
    website: "https://otter.ai",
    api: "https://otter.ai",
    freeTier: true,
    logo: "/logos/otter.svg",
    pricing: "Paid / varies",
    tags: ["productivity"],
    quickLinks: [
      { label: "Website", url: "https://otter.ai" },
    ]
  },
  {
    name: "AutoGPT",
    slug: "autogpt",
    category: "Agents",
    description: "Open-source agent framework for autonomous tasks.",
    website: "https://github.com/Significant-Gravitas/Auto-GPT",
    api: "https://github.com/Significant-Gravitas/Auto-GPT",
    freeTier: true,
    logo: "/logos/autogpt.svg",
    pricing: "Paid / varies",
    tags: ["agents"],
    quickLinks: [
      { label: "Website", url: "https://github.com/Significant-Gravitas/Auto-GPT" },
    ]
  },
  {
    name: "LangChain",
    slug: "langchain",
    category: "Dev Tools",
    description: "Framework for building LLM apps and chains.",
    website: "https://langchain.com",
    api: "https://js.langchain.com/docs",
    freeTier: true,
    logo: "/logos/langchain.svg",
    pricing: "Paid / varies",
    tags: ["dev tools"],
    quickLinks: [
      { label: "Website", url: "https://langchain.com" },
    ]
  },
  {
    name: "AgentGPT",
    slug: "agentgpt",
    category: "Agents",
    description: "Deploy agents that talk to LLMs to perform tasks.",
    website: "https://agentgpt.reworkd.ai",
    api: "https://agentgpt.reworkd.ai",
    freeTier: true,
    logo: "/logos/agentgpt.svg",
    pricing: "Paid / varies",
    tags: ["agents"],
    quickLinks: [
      { label: "Website", url: "https://agentgpt.reworkd.ai" },
    ]
  },
  {
    name: "Socratic",
    slug: "socratic",
    category: "Education",
    description: "Google's AI homework helper integrated into app.",
    website: "https://socratic.org",
    api: undefined,
    freeTier: true,
    logo: "/logos/socratic.svg",
    pricing: "Paid / varies",
    tags: ["education"],
    quickLinks: [
      { label: "Website", url: "https://socratic.org" },
    ]
  },
  {
    name: "Krea.ai",
    slug: "krea",
    category: "Image",
    description: "Discover and remix AI-generated images.",
    website: "https://krea.ai",
    api: "https://krea.ai",
    freeTier: true,
    logo: "/logos/krea.svg",
    pricing: "Paid / varies",
    tags: ["image"],
    quickLinks: [
      { label: "Website", url: "https://krea.ai" },
    ]
  },
  {
    name: "PolyAI",
    slug: "polyai",
    category: "Voice",
    description: "Conversational voice assistants for enterprises.",
    website: "https://www.poly.ai",
    api: "https://www.poly.ai",
    freeTier: false,
    logo: "/logos/polyai.svg",
    pricing: "Paid / varies",
    tags: ["voice"],
    quickLinks: [
      { label: "Website", url: "https://www.poly.ai" },
    ]
  },
  {
    name: "Gretel.ai",
    slug: "gretel",
    category: "Privacy",
    description: "Synthetic data generation and privacy tools.",
    website: "https://gretel.ai",
    api: "https://docs.gretel.ai",
    freeTier: true,
    logo: "/logos/gretel.svg",
    pricing: "Paid / varies",
    tags: ["privacy"],
    quickLinks: [
      { label: "Website", url: "https://gretel.ai" },
    ]
  },
];
