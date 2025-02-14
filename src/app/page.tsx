import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';

export default function Home() {

  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Hi, I'm Nauman 👋
              <span className="block mt-3 text-indigo-600">Full Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Building digital experiences that combine creativity with technical excellence.
              Currently specializing in modern web development and cloud technologies.
            </p>
            <Link
              href="#projects"
              className="inline-block px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </Link>
          </div>
          
          {/* Add your profile picture here */}
          <div className="relative w-64 h-64 rounded-full border-4 border-white shadow-lg overflow-hidden group">
            <Image 
              src="/nauman.jpg" 
              alt="Nauman" 
              width={256} 
              height={256} 
              priority
              className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
            />
            {/* Optional decorative ring */}
            <div className="absolute inset-0 border-2 border-indigo-100/50 rounded-full pointer-events-none" />
          </div>
        </div>

        {/* About Snippet */}
        <div className="py-20 border-t border-gray-200">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With some months of experience in full-stack development, and i am currently learning new technologies.I've honed my skills in creating
              scalable web applications using technologies like React, Next Js, Tailwind CSS, and Sanity. I am also an Alevel student with the subjects of Maths, Accounting, and Urdu. 
              I'm passionate about solving complex problems and delivering user-centric solutions.
            </p>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Preview */}
        <div className="py-20 border-t border-gray-200" id="projects">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-gray-900 text-center">Featured Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project) => (
                  <div key={project.title} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gray-100">
                      <Image
                        src={project.image}
                        alt={`Project ${project.title}`}
                        width={400}
                        height={192}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={project.link}
                      className="absolute inset-0"
                      aria-label={`View Project ${project.title}`}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/projects"
                  className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
