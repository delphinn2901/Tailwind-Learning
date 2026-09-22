function ServiceCard({ title, description, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition duration-300">

      {/* Icon */}
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white text-xl`}>
        ✦
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mt-5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-3 leading-7">
        {description}
      </p>

      {/* Button */}
      <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">
        Learn More →
      </button>

    </div>
  )
}

export default ServiceCard