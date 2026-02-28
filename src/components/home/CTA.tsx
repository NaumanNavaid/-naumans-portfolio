import React from 'react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section className="py-32 md:py-48" id="contact">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl mx-auto">
        <div className="glass rounded-[60px] p-12 md:p-24 text-center shadow-spatial-lg relative overflow-hidden border-accent/10">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-6">
              <span className="text-mono text-accent font-bold tracking-[0.2em]">Ready to Start?</span>
              <h2 className="text-display-sm md:text-display-md font-bold tracking-tightest leading-[1]">
                Let's turn your vision into a <span className="text-accent">shipping reality</span>.
              </h2>
              <p className="text-xl text-muted leading-relaxed max-w-xl mx-auto">
                Available for internships, full-time roles, and strategic projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-minimal-primary px-12 py-5 text-lg">
                Get In Touch
              </Link>
              <a
                href="mailto:nauman@example.com"
                className="btn-minimal px-12 py-5 text-lg"
              >
                Direct Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
