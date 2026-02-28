import Link from 'next/link';
import { FileTextIcon, ArrowRightIcon, MailIcon } from 'lucide-react';

export const metadata = {
  title: "Terms of Service - Nauman's Portfolio",
  description: "Terms of service for Nauman's portfolio website",
};

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="pb-32">
      {/* Header */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-mono">LEGAL</span>
          </div>

          <h1 className="text-display-md lg:text-display-lg font-extrabold mb-12 tracking-tightest leading-[0.9]">
            Terms of <span className="text-foreground/40">Service</span>
          </h1>

          <p className="text-mono">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl mx-auto">
        <div className="glass rounded-[48px] p-12 space-y-12 shadow-spatial-lg">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">1. Acceptance of Terms</h2>
            <p className="text-muted leading-relaxed">
              By accessing and using this portfolio website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">2. Intellectual Property</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>All content on this website, including but not limited to:</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Text, graphics, logos, and images</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Code examples and technical documentation</span>
                </li>
              </ul>
              <p className="mt-4">
                are owned by Nauman or respective third parties and are protected by copyright laws.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">3. Governing Law</h2>
            <p className="text-muted leading-relaxed">
              These terms are governed by the laws of Pakistan. Any disputes arising from these terms shall be resolved in accordance with local jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">4. Contact</h2>
            <div className="glass rounded-2xl p-6 inline-block">
              <a
                href="mailto:naumannavaid378@gmail.com"
                className="text-foreground font-bold tracking-tight hover:underline underline-offset-8 decoration-1"
              >
                naumannavaid378@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="text-mono border-b border-foreground/20 hover:border-foreground transition-colors pb-1"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
