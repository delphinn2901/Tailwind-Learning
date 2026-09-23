function ProjectCard({ title, description, category, technologies }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">

      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <span className="text-white text-5xl font-black">
          D
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6">

        {/* Category */}
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
          {category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mt-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mt-3 leading-7">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">

          {technologies.map((technology) => (
            <span
              key={technology}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Button */}
        <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">
          View Project →
        </button>

      </div>

    </div>
  )
}

export default ProjectCard