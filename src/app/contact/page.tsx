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
    <section className="min-h-screen pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4">
          Let's Build Something Amazing
        </h1>
        <div className="w-16 md:w-20 lg:w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4 md:mb-6"></div>
        <p className="text-muted text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl md:max-w-3xl mx-auto">
          Have a project in mind? Let's discuss how I can help bring your vision to life.
          From concept to deployment, I'm here to guide you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20 fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl border border-border/50 max-w-md mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8 text-center">Start a Conversation</h2>
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <a
              href="mailto:naumannavaid378@gmail.com"
              className="flex items-center gap-3 md:gap-4 text-muted hover:text-primary transition-colors group justify-center"
            >
              <EnvelopeIcon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="group-hover:text-primary text-sm md:text-base lg:text-lg">naumannavaid378@gmail.com</span>
            </a>
            <a
              href="tel:+923202049735"
              className="flex items-center gap-3 md:gap-4 text-muted hover:text-primary transition-colors group justify-center"
            >
              <PhoneIcon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="group-hover:text-primary text-sm md:text-base lg:text-lg">+92 320 2049735</span>
            </a>
            <div className="flex items-center gap-3 md:gap-4 text-muted pt-2 justify-center">
              <MapPinIcon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="text-sm md:text-base lg:text-lg">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl border border-border/50 max-w-md mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8 text-center">What to Include</h2>
          <ul className="space-y-3 md:space-y-4 text-muted/90">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg">Project overview and business goals</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg">Target audience and user needs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg">Timeline and budget range</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg">Reference websites or inspiration</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 xl:p-12 rounded-3xl border border-border/50 mb-12 md:mb-16 lg:mb-20 fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 lg:mb-6">Ready to Get Started?</h2>
          <p className="text-muted text-sm md:text-base lg:text-lg xl:text-xl">Send me an email and I'll get back to you within 24 hours</p>
        </div>

        <div className="text-center">
          <a
            href="mailto:naumannavaid378@gmail.com?subject=Project Inquiry&body=Hi Nauman,%0A%0AI'm interested in discussing a project. Here are some details:%0A- Project Type:%0A- Timeline:%0A- Budget Range:%0A- Additional Info:"
            className="btn-gradient p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl text-center group max-w-sm md:max-w-md lg:max-w-lg mx-auto inline-block"
          >
            <EnvelopeIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-3 md:mb-4 lg:mb-6" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4">Email Me</h3>
            <p className="text-sm md:text-base lg:text-lg opacity-90">Send a detailed project brief and let's discuss your vision</p>
          </a>
        </div>
      </div>

      <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="inline-flex items-center gap-3 md:gap-4 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full border border-emerald-500/20">
          <ClockIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-700 dark:text-emerald-300 font-medium text-sm md:text-base lg:text-lg">
            Average response time: 24 hours
          </span>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4 lg:space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 lg:mb-8">Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="bg-card/30 backdrop-blur-md p-5 md:p-6 lg:p-8 rounded-2xl border border-border/50">
            <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-2 md:mb-3 text-foreground">{item.question}</h3>
            <p className="text-muted/90 text-sm md:text-base lg:text-lg">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-16 lg:mt-20 fade-in" style={{ animationDelay: '0.5s' }}>
        <p className="text-muted mb-4 md:mb-6 text-sm md:text-base lg:text-lg">Still have questions?</p>
        <a
          href="mailto:naumannavaid378@gmail.com"
          className="btn-gradient px-6 md:px-8 py-3 md:py-4 lg:px-10 lg:py-5 text-sm md:text-base lg:text-lg rounded-xl font-semibold inline-flex items-center gap-2"
        >
          Contact Me Directly
          <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </a>
      </div>
    </section>
  );
}
