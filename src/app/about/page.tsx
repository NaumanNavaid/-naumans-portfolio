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
    <section className="min-h-screen pt-32 xl:pt-40 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16 xl:mb-20 fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-4">
            About Nauman
          </h1>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted text-lg xl:text-xl max-w-3xl mx-auto">
            Transforming business ideas into powerful digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:gap-20 mb-20 xl:mb-24 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-8 xl:space-y-10">
            <div className="bg-card/50 backdrop-blur-md p-10 xl:p-12 rounded-3xl border border-border/50">
              <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-6 xl:mb-8">My Story</h2>
              <p className="text-muted/90 text-lg xl:text-xl leading-relaxed mb-6">
                As a full-stack developer with a passion for creating impactful digital experiences, I combine technical expertise with a strong understanding of business needs.
              </p>
              <p className="text-muted/90 text-lg xl:text-xl leading-relaxed">
                With a strong foundation in analytical thinking and problem-solving, I combine technical expertise with business acumen to deliver solutions that drive measurable results. My approach focuses on understanding client needs and building scalable applications that solve real-world challenges.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-md p-10 xl:p-12 rounded-3xl border border-border/50">
              <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-6 xl:mb-8">My Values</h2>
              <div className="space-y-6 xl:space-y-8">
                {values.map((value, idx) => (
                  <div key={idx} className="flex gap-4 xl:gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <CheckIcon className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 xl:text-lg">{value.title}</h3>
                      <p className="text-muted/80 text-sm xl:text-base">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative rounded-full border-4 border-white/30 backdrop-blur-sm overflow-hidden">
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

        <div className="grid md:grid-cols-3 xl:gap-10 fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="bg-card/50 backdrop-blur-md p-8 xl:p-10 rounded-3xl border border-border/50 text-center card-hover group">
            <div className="w-16 h-16 xl:w-20 xl:h-20 mx-auto mb-6 xl:mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl xl:text-3xl font-bold text-white">💡</span>
            </div>
            <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-3 xl:mb-4">Innovation</h3>
            <p className="text-muted/90 xl:text-lg">
              Bringing fresh perspectives and creative solutions to every challenge, ensuring your project stands out.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-md p-8 xl:p-10 rounded-3xl border border-border/50 text-center card-hover group">
            <div className="w-16 h-16 xl:w-20 xl:h-20 mx-auto mb-6 xl:mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl xl:text-3xl font-bold text-white">🎯</span>
            </div>
            <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-3 xl:mb-4">Focus</h3>
            <p className="text-muted/90 xl:text-lg">
              Maintaining clear communication and delivering projects on time with attention to every detail.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-md p-8 xl:p-10 rounded-3xl border border-border/50 text-center card-hover group">
            <div className="w-16 h-16 xl:w-20 xl:h-20 mx-auto mb-6 xl:mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl xl:text-3xl font-bold text-white">🚀</span>
            </div>
            <h3 className="text-xl xl:text-2xl font-bold text-foreground mb-3 xl:mb-4">Growth</h3>
            <p className="text-muted/90 xl:text-lg">
              Committed to continuous learning and staying updated with the latest industry trends and technologies.
            </p>
          </div>
        </div>

        <div className="text-center mt-16 xl:mt-20 fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted mb-6 xl:text-lg">Ready to collaborate on your next project?</p>
          <a
            href="/contact"
            className="btn-gradient px-8 py-4 xl:px-10 xl:py-5 xl:text-lg rounded-xl font-semibold inline-flex items-center gap-2 group"
          >
            Let's Talk
            <ArrowRightIcon className="w-5 h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}