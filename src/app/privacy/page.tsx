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
    <main>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
          <ShieldIcon className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent tracking-wide">LEGAL</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Privacy Policy
        </h1>

        <p className="text-muted">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto pb-24">
        <div className="card-elevated bg-card space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Information I Collect</h2>
            <p className="text-muted leading-relaxed mb-4">
              I may collect the following types of information when you interact with my portfolio:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Contact Information:</strong> Name, email address, and any details you provide when reaching out via the contact form or email.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Usage Data:</strong> Anonymous analytics data such as browser type, device type, and pages visited to improve user experience.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Cookies:</strong> Minimal cookies for theme preference and essential functionality.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">2. How I Use Your Information</h2>
            <p className="text-muted leading-relaxed mb-4">
              I use the collected information for the following purposes:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Responding to your inquiries and providing requested services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Improving the content and functionality of this website</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Communicating about projects, services, or opportunities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Analyzing website usage to enhance user experience</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Data Sharing & Disclosure</h2>
            <p className="text-muted leading-relaxed">
              I do <strong>not</strong> sell, trade, or rent your personal information to third parties. Your information may only be shared in the following circumstances:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>With your explicit consent</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>To comply with legal obligations or protect my rights</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>With trusted service providers who assist in operating my website (e.g., hosting, analytics)</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted leading-relaxed">
              I implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and I cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Cookies & Tracking</h2>
            <p className="text-muted leading-relaxed">
              This website uses minimal cookies for:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly (theme preference)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Analytics:</strong> Anonymous usage data to improve the website experience</span>
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              You can manage cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Third-Party Links</h2>
            <p className="text-muted leading-relaxed">
              This website may contain links to third-party websites (e.g., GitHub, LinkedIn, project deployments). I am not responsible for the privacy practices or content of these external sites. Please review their privacy policies before providing personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-muted mt-4">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Access:</strong> Request a copy of your personal data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span><strong className="text-foreground">Opt-out:</strong> Opt out of future communications</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
            <p className="text-muted leading-relaxed">
              This website is not intended for children under 16 years of age. I do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal information, please contact me.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
            <p className="text-muted leading-relaxed">
              I may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. I encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">10. Contact Me</h2>
            <p className="text-muted leading-relaxed">
              If you have questions, concerns, or requests regarding this privacy policy or your personal information, please contact me:
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
