import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About - Nauman's Portfolio",
  description: "Learn more about Nauman's skills and education",
};

export default function About() {
  const skills = [
    'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 
    'Sanity CMS', 'Git', 'Responsive Design'
  ];

  return (
    <section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <div className="relative w-64 h-64 rounded-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative rounded-full border-4 border-white/30 backdrop-blur-sm overflow-hidden">
                <Image 
                  src="/nauman.jpg" 
                  alt="Nauman" 
                  width={256} 
                  height={256}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="flex-1 max-w-md space-y-6">
            <p className="text-muted text-lg leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies
              and a strong foundation in Accounting and Maths principles. I am currently 
              studying A Levels in Maths, Accounting and Urdu. I am looking forward to 
              using my skills to make an impact in my field.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/NaumanNavaid" target="_blank" rel="noopener noreferrer" 
                className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-accent/10">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
                className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-accent/10">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8">
            <div className="p-8 bg-card rounded-2xl border border-border shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="pb-6 border-b border-border/50">
                    <h3 className="text-lg font-semibold text-foreground"> 
                      O Levels</h3>
                    <p className="text-muted mt-1">Maths, Accounting, Urdu, English, Islamiyat, Pakistan Studies, Physics, Chemistry</p>
                    <p className="text-sm text-muted/80 mt-2">2018- 2023</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">A Levels</h3>
                    <p className="text-muted mt-1">Maths, Accounting, Urdu</p>
                    <p className="text-sm text-muted/80 mt-2">2023 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-card rounded-2xl border border-border shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors flex items-center"
                >
                  <div className="mr-3 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}