function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-extrabold">
              Delphics<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-md leading-7">
              We build modern software, responsive websites,
              and creative designs that help businesses grow.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                X
              </a>

            </div>

          </div>

          {/* Company Links */}
          <div>

            <h3 className="font-bold text-lg">
              Company
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <a href="#" className="text-gray-400 hover:text-white transition">
                About
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                Services
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                Projects
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-bold text-lg">
              Services
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <a href="#" className="text-gray-400 hover:text-white transition">
                Software Development
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                Web Development
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                Graphic Design
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition">
                UI/UX Design
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Delphics. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer