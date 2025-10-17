export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600">© PLNITUDE — Growth Partner</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#why-plnitude" className="text-gray-700 hover:text-gray-900">Why PLNITUDE</a>
          <a href="#how-we-work" className="text-gray-700 hover:text-gray-900">How We Work</a>
          <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}