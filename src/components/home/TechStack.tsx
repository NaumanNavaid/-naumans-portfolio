import React from 'react';

export const TechStack = () => {
  const categories = [
    {
      name: "Frontend",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"]
    },
    {
      name: "Backend",
      tech: ["FastAPI", "Node.js", "Python", "PostgreSQL"]
    },
    {
      name: "AI / Data",
      tech: ["Qdrant", "LangChain", "OpenAI", "Vector DB"]
    },
    {
      name: "DevOps",
      tech: ["Docker", "Vercel", "CI/CD", "AWS"]
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="glass rounded-[24px] p-6 text-center border-accent/5 hover:border-accent/20 transition-colors"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-mono mb-6 text-accent font-bold tracking-widest">{cat.name}</h3>
              <ul className="space-y-3">
                {cat.tech.map((t) => (
                  <li key={t} className="text-sm font-medium tracking-tight opacity-60 hover:opacity-100 hover:text-accent transition-all">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
