import { useState } from "react"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-950 text-white fixed top-0 w-full border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight"
          >
            Delphics<span className="text-blue-500">.</span>
          </a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
  href="#"
  className="text-gray-300 hover:text-white transition"
>
  Home
</a>

<a
  href="#about"
  className="text-gray-300 hover:text-white transition"
>
  About
</a>

<a
  href="#services"
  className="text-gray-300 hover:text-white transition"
>
  Services
</a>

<a
  href="#contact"
  className="text-gray-300 hover:text-white transition"
>
  Contact
</a>
            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-semibold">
              Get Started
            </button>

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">

            <div className="flex flex-col gap-4">

              <a
  href="#"
  className="text-gray-300 hover:text-white transition"
>
  Home
</a>

<a
  href="#about"
  className="text-gray-300 hover:text-white transition"
>
  About
</a>

<a
  href="#services"
  className="text-gray-300 hover:text-white transition"
>
  Services
</a>

<a
  href="#contact"
  className="text-gray-300 hover:text-white transition"
>
  Contact
</a>
              <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-semibold w-full">
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