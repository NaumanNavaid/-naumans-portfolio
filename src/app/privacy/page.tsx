import Link from 'next/link';
import { ShieldIcon, ArrowRightIcon, MailIcon } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy - Nauman's Portfolio",
  description: "Privacy policy for Nauman's portfolio website",
};

export default function PrivacyPolicy() {
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
            Privacy <span className="text-foreground/40">Policy</span>
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
            <h2 className="text-2xl font-bold tracking-tight mb-6">1. Information I Collect</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>I may collect the following types of information when you interact with my portfolio:</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Contact Information:</strong> Name, email address, and any details you provide when reaching out.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Usage Data:</strong> Anonymous analytics data such as browser type and device type.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">2. Data Security</h2>
            <p className="text-muted leading-relaxed">
              I implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">3. Contact</h2>
            <p className="text-muted leading-relaxed mb-8">
              If you have questions regarding this privacy policy or your personal information, please contact me:
            </p>
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
