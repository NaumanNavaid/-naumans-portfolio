import React from 'react';
import Link from 'next/link';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon,
  ClockIcon,
  CalendarIcon,
  SendIcon,
  ArrowRightIcon
} from 'lucide-react';

export const metadata = {
  title: "Contact - Nauman's Portfolio",
  description: "Get in touch with Syed Nauman Navaid, a full-stack developer specializing in modern web applications and AI-integrated solutions.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email",
      value: "naumannavad378@gmail.com",
      href: "mailto:naumannavad378@gmail.com",
      description: "Best for detailed inquiries"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      value: "+92 309 1273446",
      href: "tel:+923091273446",
      description: "Mon-Fri, 9am-6pm PKT"
    },
    {
      icon: <CalendarIcon className="w-6 h-6" />,
      title: "Portfolio",
      value: "View Online",
      href: "https://naumans-portfolio-kappa.vercel.app",
      description: "Live projects showcase",
      external: true
    }
  ];

  const whatToInclude = [
    "Project overview and business goals",
    "Target audience and user needs",
    "Timeline and budget range",
    "Reference websites or inspiration"
  ];

  const faqItems = [
    {
      question: "What's your typical project timeline?",
      answer: "Most MVPs are delivered in 4-8 weeks. Complex projects may take longer. I'll provide a detailed timeline after understanding your requirements."
    },
    {
      question: "Do you work with startups and enterprises?",
      answer: "Yes! I partner with startups, SMBs, and established enterprises. Each engagement is tailored to your specific needs and goals."
    },
    {
      question: "What's your pricing model?",
      answer: "I offer both project-based and hourly pricing depending on the engagement type. Let's discuss to find what works best for you."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely. I offer maintenance packages and ongoing support to ensure your product continues to perform optimally."
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <SendIcon className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent tracking-wide">GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Build Your<br />
            <span className="text-gradient-premium">Next Product</span>
          </h1>

          <p className="text-xl text-muted leading-relaxed">
            Have a project in mind? I'd love to hear about it. Reach out and let's discuss how I can help transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => (
            <a
              key={method.title}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="card-premium group text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-4 text-accent group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{method.title}</h3>
              <p className="text-accent font-semibold mb-2 group-hover:underline">
                {method.value}
              </p>
              <p className="text-sm text-muted">{method.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* What to Include */}
      <section className="py-16 bg-card-alt">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What to Include in Your Message
              </h2>
              <p className="text-muted mb-8 leading-relaxed">
                The more details you provide, the better I can understand your needs and provide accurate guidance. Don't worry if you're not sure about everything—we can figure it out together.
              </p>
              <ul className="space-y-4">
                {whatToInclude.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated bg-card">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4">
                  <MailIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send Me a Message
                </h3>
                <p className="text-muted">
                  I respond to all inquiries within 24 hours
                </p>
              </div>

              <a
                href="mailto:naumannavad378@gmail.com"
                className="btn-primary w-full"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <SendIcon className="w-5 h-5" />
                Compose Email
              </a>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full">
                  <ClockIcon className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">
                    Avg. response: 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted">
            Quick answers to common questions about working together
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="card-premium">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.question}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="card-elevated bg-card text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted mb-8">
            Let's discuss how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:naumannavad378@gmail.com"
              className="btn-premium"
            >
              <MailIcon className="w-5 h-5" />
              Send Email
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            <Link
              href="/"
              className="btn-secondary"
            >
              <ArrowRightIcon className="w-5 h-5 rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
