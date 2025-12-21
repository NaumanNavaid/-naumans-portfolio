import { EnvelopeIcon, PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from 'lucide-react';

export const metadata = {
  title: "Start Your Project - Nauman's Portfolio",
  description: "Let's discuss your project and bring your vision to life with expert web development services",
};

export default function Contact() {
  const faqItems = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects are completed within 4-8 weeks, depending on complexity and scope. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with startups and enterprises?",
      answer: "Yes! I partner with startups, small businesses, and established enterprises. Each engagement is tailored to your specific needs and goals."
    },
    {
      question: "What information do you need to start a project?",
      answer: "I typically need your project goals, target audience, desired features, timeline, and budget range. Don't worry if you're not sure about everything - we can figure it out together."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely. I offer maintenance packages and ongoing support to ensure your application continues to perform optimally."
    }
  ];

  return (
    <section className="min-h-screen pt-32 xl:pt-40 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 xl:mb-16 fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-4">
            Let's Build Something Amazing
          </h1>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted text-lg xl:text-xl max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
            From concept to deployment, I'm here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 mb-12 xl:mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card/50 backdrop-blur-md p-8 xl:p-10 rounded-3xl border border-border/50 max-w-md mx-auto">
            <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-6 xl:mb-8 text-center">Start a Conversation</h2>
            <div className="space-y-4 xl:space-y-6">
              <a
                href="mailto:naumannavaid378@gmail.com"
                className="flex items-center gap-3 xl:gap-4 text-muted hover:text-primary transition-colors group justify-center"
              >
                <EnvelopeIcon className="w-5 h-5 xl:w-6 xl:h-6 text-primary" />
                <span className="group-hover:text-primary xl:text-lg">naumannavaid378@gmail.com</span>
              </a>
              <a
                href="tel:+923202049735"
                className="flex items-center gap-3 xl:gap-4 text-muted hover:text-primary transition-colors group justify-center"
              >
                <PhoneIcon className="w-5 h-5 xl:w-6 xl:h-6 text-primary" />
                <span className="group-hover:text-primary xl:text-lg">+92 320 2049735</span>
              </a>
              <div className="flex items-center gap-3 xl:gap-4 text-muted pt-2 justify-center">
                <MapPinIcon className="w-5 h-5 xl:w-6 xl:h-6 text-primary" />
                <span className="xl:text-lg">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-md p-8 xl:p-10 rounded-3xl border border-border/50 max-w-md mx-auto">
            <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-6 xl:mb-8 text-center">What to Include</h2>
            <ul className="space-y-3 xl:space-y-4 text-muted/90">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="xl:text-lg">Project overview and business goals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="xl:text-lg">Target audience and user needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="xl:text-lg">Timeline and budget range</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="xl:text-lg">Reference websites or inspiration</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-md p-10 xl:p-12 rounded-3xl border border-border/50 mb-12 xl:mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8 xl:mb-10">
            <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4 xl:mb-6">Ready to Get Started?</h2>
            <p className="text-muted text-lg xl:text-xl">Send me an email and I'll get back to you within 24 hours</p>
          </div>

          <div className="text-center">
            <a
              href="mailto:naumannavaid378@gmail.com?subject=Project Inquiry&body=Hi Nauman,%0A%0AI'm interested in discussing a project. Here are some details:%0A- Project Type:%0A- Timeline:%0A- Budget Range:%0A- Additional Info:"
              className="btn-gradient p-8 xl:p-12 rounded-2xl text-center group max-w-md xl:max-w-lg mx-auto inline-block"
            >
              <EnvelopeIcon className="w-10 h-10 xl:w-12 xl:h-12 mx-auto mb-4 xl:mb-6" />
              <h3 className="text-2xl xl:text-3xl font-bold mb-3 xl:mb-4">Email Me</h3>
              <p className="text-base xl:text-lg opacity-90">Send a detailed project brief and let's discuss your vision</p>
            </a>
          </div>
        </div>

        <div className="text-center mb-12 xl:mb-16 fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-4 xl:gap-4 px-6 xl:px-8 py-3 xl:py-4 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full border border-emerald-500/20">
            <ClockIcon className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium xl:text-lg">
              Average response time: 24 hours
            </span>
          </div>
        </div>

        <div className="space-y-4 xl:space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl xl:text-3xl font-bold text-center mb-6 xl:mb-8">Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div key={index} className="bg-card/30 backdrop-blur-md p-6 xl:p-8 rounded-2xl border border-border/50">
              <h3 className="font-semibold text-lg xl:text-xl mb-2 xl:mb-3 text-foreground">{item.question}</h3>
              <p className="text-muted/90 xl:text-lg">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 xl:mt-16 fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted mb-4 xl:text-lg">Still have questions?</p>
          <a
            href="mailto:naumannavaid378@gmail.com"
            className="btn-gradient px-8 py-4 xl:px-10 xl:py-5 xl:text-lg rounded-xl font-semibold inline-flex items-center gap-2"
          >
            Contact Me Directly
            <ArrowRightIcon className="w-5 h-5 xl:w-6 xl:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}