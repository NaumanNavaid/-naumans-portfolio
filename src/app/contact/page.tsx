import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Contact - Nauman's Portfolio",
  description: "Get in touch with Nauman for opportunities and collaborations",
};

export default function Contact() {
  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out directly via email or phone - I'm always open to discussing
            new projects and opportunities.
          </p>
        </div>

        <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="space-y-6">
            <div className="text-center">
              <EnvelopeIcon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <a
                href="mailto:naumannavaid378@gmail.com"
                className=" text-lg md:text-2xl text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
              >
                naumannavaid378@gmail.com
              </a>
            </div>

            <div className="text-center">
              <PhoneIcon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <a
                href="tel:+923202049735"
                className="text-xl text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
              >
                +92 320 2049735
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}