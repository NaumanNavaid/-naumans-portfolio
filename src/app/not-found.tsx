import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
      <div className="space-y-8 fade-in">
        <div className="relative">
          <h1 className="text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted max-w-xl mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void.
            Let's get you back to safe ground.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block btn-gradient px-8 py-4 rounded-lg font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 