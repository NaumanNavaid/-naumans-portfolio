import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-6">
        <h1 className="text-9xl font-bold text-indigo-600 animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900">Page Not Found</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Oops! The page you're looking for seems to have vanished into the digital void.
          Let's get you back to safe ground.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 