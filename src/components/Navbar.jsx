import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 overflow-visible">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Left Logo */}
        <div className="relative">
          <img
            src={logo}
            alt="Serve & Lead"
            className="h-35 -my-13" // increased logo height & nudged it up
          />
        </div>

        {/* Right Links */}
        <div className="space-x-6 text-gray-700 font-medium text-lg">
          <a href="/" className="hover:text-cyan-600">Home</a>
          <a href="/about" className="hover:text-cyan-600">About</a>
          <a href="/#events" className="hover:text-cyan-600">Events</a>
          <a href="/#certifications" className="hover:text-cyan-600">Certifications</a>
          <a href="#contact" className="hover:text-cyan-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
