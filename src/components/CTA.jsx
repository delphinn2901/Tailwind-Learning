function CTA() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">

          {/* Small Label */}
          <p className="text-blue-100 font-semibold uppercase tracking-widest text-sm">
            Let's Work Together
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            Have an Idea?
            <br />
            Let's Build It Together.
          </h2>

          {/* Description */}
          <p className="text-blue-100 max-w-2xl mx-auto mt-5 text-lg leading-8">
            Whether you need software, a modern website, or creative
            design, Delphics can help turn your idea into reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button className="bg-white text-blue-700 hover:bg-gray-100 px-7 py-3 rounded-lg font-semibold transition duration-300">
              Start a Project →
            </button>

            <button className="border border-white/50 hover:bg-white/10 px-7 py-3 rounded-lg font-semibold transition duration-300">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CTA