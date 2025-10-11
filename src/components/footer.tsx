const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Nauman Navaid. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#!" className="text-muted hover:text-primary transition-colors">GitHub</a>
        <a href="#!" className="text-muted hover:text-primary transition-colors">LinkedIn</a>
        <a href="#!" className="text-muted hover:text-primary transition-colors">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer;

