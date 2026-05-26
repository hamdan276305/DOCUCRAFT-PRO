'use client';

import Link from 'next/link';

export default function AIToolsLayout() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4 gradient-text">AI-Powered Tools</h1>
        <p className="text-xl text-slate-400 mb-12">
          Advanced document tools powered by artificial intelligence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ToolCard
            icon="📋"
            title="Resume Builder"
            description="Create professional resumes with AI assistance"
            href="/tools/ai/resume"
          />
          <ToolCard
            icon="✍️"
            title="Document Generator"
            description="Generate documents powered by AI"
            href="/tools/ai/generator"
          />
          <ToolCard
            icon="🌍"
            title="Translator"
            description="Translate documents to 100+ languages"
            href="/tools/ai/translator"
          />
          <ToolCard
            icon="📝"
            title="Summarizer"
            description="AI-powered document summarization"
            href="/tools/ai/summarizer"
          />
          <ToolCard
            icon="✏️"
            title="Content Improver"
            description="Enhance and improve your text with AI"
            href="/tools/ai/improver"
          />
          <ToolCard
            icon="🔍"
            title="Grammar Checker"
            description="Check and fix grammar and spelling"
            href="/tools/ai/grammar"
          />
          <ToolCard
            icon="🎯"
            title="SEO Optimizer"
            description="Optimize content for search engines"
            href="/tools/ai/seo"
          />
          <ToolCard
            icon="💡"
            title="Idea Generator"
            description="Generate creative ideas and content"
            href="/tools/ai/ideas"
          />
        </div>

        <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">AI Features</h2>
          <ul className="space-y-3 text-slate-300 grid grid-cols-1 md:grid-cols-2">
            <li>✓ <strong>Free AI Models:</strong> No subscription required</li>
            <li>✓ <strong>Fast Processing:</strong> Instant results</li>
            <li>✓ <strong>High Accuracy:</strong> Advanced AI algorithms</li>
            <li>✓ <strong>Privacy Focused:</strong> Your data stays private</li>
            <li>✓ <strong>Unlimited Usage:</strong> Use as much as you want</li>
            <li>✓ <strong>Multiple Languages:</strong> Support for 100+ languages</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function ToolCard({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:bg-slate-800/70 transition-all cursor-pointer group h-full">
        <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </Link>
  );
}
