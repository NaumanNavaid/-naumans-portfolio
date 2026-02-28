import React from 'react';
import Link from 'next/link';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon,
  ClockIcon,
  SendIcon,
  ArrowRightIcon,
  Linkedin
} from 'lucide-react';

export const metadata = {
  title: "Contact - Nauman's Portfolio",
  description: "Get in touch with Syed Nauman Navaid, a full-stack developer specializing in modern web applications and AI-integrated solutions.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MailIcon className="w-5 h-5" />,
      title: "Email",
      value: "naumannavad378@gmail.com",
      href: "mailto:naumannavad378@gmail.com"
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      title: "Phone",
      value: "+92 309 1273446",
      href: "tel:+923091273446"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Connect",
      href: "https://linkedin.com/in/nauman",
      external: true
    }
  ];

  return (
    <main className="pb-32">
      {/* Hero */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-mono">CONTACT</span>
          </div>

          <h1 className="text-display-md lg:text-display-lg font-extrabold mb-12 tracking-tightest leading-[0.9]">
            Let's <span className="text-accent">Connect</span>
          </h1>

          <p className="text-2xl text-muted leading-relaxed max-w-2xl">
            Have a project in mind? Reach out and let's discuss how I can help transform your <span className="text-foreground">vision</span> into a <span className="text-foreground">product</span>.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="glass rounded-[32px] p-8 group hover:translate-y-[-8px] transition-all duration-500 shadow-spatial-sm hover:shadow-spatial-md text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mx-auto mb-8 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                {method.icon}
              </div>
              <h3 className="text-mono mb-4">{method.title}</h3>
              <p className="text-xl font-bold tracking-tighter group-hover:underline decoration-1 underline-offset-8">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Message Section */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl mx-auto">
        <div className="glass rounded-[60px] p-12 md:p-24 shadow-spatial-lg relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tightest leading-tight mb-8">
                Direct Communication is key.
              </h2>
              <p className="text-muted text-lg mb-12 leading-relaxed">
                I respond to all serious inquiries within 24 hours. Whether you need a full-stack architect or an AI specialist, let's start with a simple conversation.
              </p>
              
              <a
                href="mailto:naumannavad378@gmail.com"
                className="btn-minimal-primary px-12 py-5 text-lg inline-flex items-center gap-4"
              >
                Send Message
                <SendIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-6">
              {[
                "AI-Powered SaaS Platforms",
                "MVP Product Engineering",
                "Full-Stack Web Apps",
                "Strategic Technical Consulting"
              ].map(item => (
                <div key={item} className="flex items-center gap-4 text-mono">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Back */}
      <section className="pt-24 text-center">
        <Link href="/" className="text-mono border-b border-foreground/20 hover:border-foreground transition-colors pb-1">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
