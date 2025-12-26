import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "About Nauman - Full-Stack Developer",
  description: "Learn more about Nauman's expertise in web development and professional services",
};

export default function About() {
  const values = [
    {
      title: "Client-Centric Approach",
      description: "Your success is my priority. I focus on delivering solutions that meet your business objectives and exceed expectations."
    },
    {
      title: "Technical Excellence",
      description: "Clean, maintainable code that scales. I follow industry best practices and stay updated with the latest technologies."
    },
    {
      title: "Continuous Learning",
      description: "The tech world evolves rapidly. I'm constantly learning and adapting to new technologies and methodologies."
    }
  ];

  return (
    <section className="min-h-screen pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="text-center mb-12 md:mb-16 lg:mb-20 fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-4">
          About Nauman
        </h1>
        <div className="w-16 md:w-20 lg:w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4 md:mb-6"></div>
        <p className="text-muted text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl md:max-w-3xl mx-auto">
          Transforming business ideas into powerful digital solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 mb-16 md:mb-20 lg:mb-24 fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 xl:p-12 rounded-3xl border border-border/50">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">My Story</h2>
            <p className="text-muted/90 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 md:mb-6">
              As a full-stack developer with a passion for creating impactful digital experiences, I combine technical expertise with a strong understanding of business needs.
            </p>
            <p className="text-muted/90 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
              With a strong foundation in analytical thinking and problem-solving, I combine technical expertise with business acumen to deliver solutions that drive measurable results. My approach focuses on understanding client needs and building scalable applications that solve real-world challenges.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 xl:p-12 rounded-3xl border border-border/50">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">My Values</h2>
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-3 md:gap-4 lg:gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base lg:text-lg">{value.title}</h3>
                    <p className="text-muted/80 text-xs md:text-sm lg:text-base xl:text-lg">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] rounded-full overflow-hidden group mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-full border-3 md:border-4 border-white/30 backdrop-blur-sm overflow-hidden">
              <img
                src="/nauman.jpg"
                alt="Nauman - Full-Stack Developer"
                width={320}
                height={320}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -inset-2 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl border border-border/50 text-center card-hover group">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-4 md:mb-6 lg:mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">💡</span>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4">Innovation</h3>
          <p className="text-muted/90 text-sm md:text-base lg:text-lg">
            Bringing fresh perspectives and creative solutions to every challenge, ensuring your project stands out.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl border border-border/50 text-center card-hover group">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-4 md:mb-6 lg:mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">🎯</span>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4">Focus</h3>
          <p className="text-muted/90 text-sm md:text-base lg:text-lg">
            Maintaining clear communication and delivering projects on time with attention to every detail.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-3xl border border-border/50 text-center card-hover group">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-4 md:mb-6 lg:mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">🚀</span>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4">Growth</h3>
          <p className="text-muted/90 text-sm md:text-base lg:text-lg">
            Committed to continuous learning and staying updated with the latest industry trends and technologies.
          </p>
        </div>
      </div>

      <div className="text-center mt-12 md:mt-16 lg:mt-20 fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="text-muted mb-4 md:mb-6 text-sm md:text-base lg:text-lg">Ready to collaborate on your next project?</p>
        <a
          href="/contact"
          className="btn-gradient px-6 md:px-8 py-3 md:py-4 lg:px-10 lg:py-5 text-sm md:text-base lg:text-lg rounded-xl font-semibold inline-flex items-center gap-2 group"
        >
          Let's Talk
          <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
