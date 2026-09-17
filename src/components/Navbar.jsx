import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-tight hover:opacity-90 transition"
          >
            Delphics<span className="text-emerald-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>

            <button className="bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold px-5 py-2 rounded-full transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white text-xl p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800/80 pt-4">
            <div className="flex flex-col gap-4 font-medium text-sm">
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>

              <button className="bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold px-5 py-2.5 rounded-xl transition-all w-full shadow-lg shadow-emerald-500/20">
                Get Started
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar