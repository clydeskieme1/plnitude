export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold tracking-tight text-gray-900">PLNITUDE</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#why-plnitude" className="text-gray-700 hover:text-gray-900">Why PLNITUDE</a>
          <a href="#how-we-work" className="text-gray-700 hover:text-gray-900">How We Work</a>
          <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
          <a href="#hero" className="text-white bg-gray-900 hover:bg-black px-3 py-1.5 rounded-md">Book a Call</a>
        </nav>
      </div>
    </header>
  );
}