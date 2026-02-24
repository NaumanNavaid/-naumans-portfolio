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
    <main>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
          <FileTextIcon className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent tracking-wide">LEGAL</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Terms of Service
        </h1>

        <p className="text-muted">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto pb-24">
        <div className="card-elevated bg-card space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted leading-relaxed">
              By accessing and using this portfolio website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Purpose of This Website</h2>
            <p className="text-muted leading-relaxed">
              This website serves as a personal portfolio to showcase my work, skills, and services as a Full-Stack Product Architect. It is intended for informational purposes and to facilitate professional connections and project inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Intellectual Property Rights</h2>
            <p className="text-muted leading-relaxed mb-4">
              All content on this website, including but not limited to:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Text, graphics, logos, and images</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Code examples and technical documentation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Project case studies and descriptions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Website design and layout</span>
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              are owned by Nauman or respective third parties and are protected by copyright laws. You may not reproduce, distribute, or create derivative works without explicit written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Permitted Use</h2>
            <p className="text-muted leading-relaxed">
              You are permitted to:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Browse and view this website for personal or professional evaluation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Contact me regarding projects, services, or opportunities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Share links to the content with proper attribution</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Use publicly available code examples for learning purposes</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Prohibited Activities</h2>
            <p className="text-muted leading-relaxed">
              You may not:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Copy, modify, or distribute any content without permission</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Use this website for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Attempt to gain unauthorized access to any part of this website</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Use automated tools to scrape or harvest data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Interfere with the proper functioning of this website</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Project Inquiries & Services</h2>
            <p className="text-muted leading-relaxed mb-4">
              When you contact me regarding projects or services:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>I will respond to legitimate inquiries within a reasonable timeframe</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Project scope, timeline, and pricing will be discussed on a case-by-case basis</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Both parties will agree on terms before any work commences</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Specific project terms will be outlined in a separate agreement</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">7. Third-Party Links</h2>
            <p className="text-muted leading-relaxed">
              This website may contain links to third-party websites (e.g., GitHub, LinkedIn, deployed projects). I am not responsible for the content, policies, or practices of these external sites. Your interactions with these websites are governed by their respective terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-muted leading-relaxed">
              To the fullest extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Access to or inability to access this website</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Any errors or omissions in content</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Unauthorized access to or alteration of your data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Any other matter relating to this website</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-muted leading-relaxed">
              This website is provided "as is" without any warranties, expressed or implied. I do not warrant that:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>The website will be uninterrupted or error-free</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Defects will be corrected</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>The website is free of viruses or other harmful components</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>The results of using this website will meet your requirements</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">10. Termination</h2>
            <p className="text-muted leading-relaxed">
              I reserve the right to terminate or restrict access to this website at any time, without notice, for any reason, including but not limited to violation of these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
            <p className="text-muted leading-relaxed">
              I may revise these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of this website after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">12. Governing Law</h2>
            <p className="text-muted leading-relaxed">
              These terms are governed by the laws of Pakistan. Any disputes arising from these terms shall be resolved in accordance with Pakistani law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">13. Contact Information</h2>
            <p className="text-muted leading-relaxed">
              For questions about these Terms of Service, please contact:
            </p>
            <div className="mt-4 p-4 bg-background rounded-xl border border-border">
              <a
                href="mailto:naumannavaid378@gmail.com"
                className="flex items-center gap-3 text-accent hover:underline"
              >
                <MailIcon className="w-5 h-5" />
                naumannavaid378@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
          >
            <ArrowRightIcon className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
