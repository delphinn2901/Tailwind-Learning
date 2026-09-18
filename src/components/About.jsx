function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1 shadow-xl">
              <div className="bg-slate-950 rounded-[22px] min-h-[350px] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl font-black">
                    D
                  </div>

                  <p className="text-2xl font-bold tracking-widest mt-3">
                    DELPHICS
                  </p>

                  <p className="text-blue-400 mt-2">
                    SOFTWARE + DESIGN
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              About Delphics
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 leading-tight">
              Technology Meets Creativity
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Delphics is a software and creative design company focused
              on building modern digital experiences for businesses,
              organizations, and individuals.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              We combine software development, web solutions, and graphic
              design to turn ideas into useful and professional digital
              products.
            </p>

            {/* Features */}
            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>

                <p className="text-gray-700 font-medium">
                  Modern software solutions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>

                <p className="text-gray-700 font-medium">
                  Responsive web development
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>

                <p className="text-gray-700 font-medium">
                  Creative graphic design
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition duration-300">
              Learn More →
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About