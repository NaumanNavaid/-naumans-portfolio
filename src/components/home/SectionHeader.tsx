import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  description,
  align = 'center'
}: {
  badge?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}) => (
  <div className={`mb-16 md:mb-24 ${align === 'center' ? 'text-center' : ''}`}>
    {badge && (
      <div className={`inline-flex items-center gap-2 mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="text-mono">{badge}</span>
      </div>
    )}
    <h2 className="text-display-sm md:text-display-md mb-6 max-w-4xl leading-[1.1] tracking-tightest">
      {title}
    </h2>
    <p className={`text-muted text-lg md:text-xl max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
      {description}
    </p>
  </div>
);

export const TechBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full hover:bg-foreground/5 transition-colors duration-500">
    <span className="text-foreground/60 scale-75">{icon}</span>
    <span className="text-[12px] font-medium text-foreground/80 tracking-tight">{name}</span>
  </div>
);
