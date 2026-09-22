import ServiceCard from "./ServiceCard"

const services = [
  {
    title: "Software Development",
    description: "We build modern software solutions for businesses.",
    color: "bg-blue-600",
  },
  {
    title: "Graphic Design",
    description: "We create creative and professional designs for businesses.",
    color: "bg-purple-600",
  },
  {
    title: "Web Solutions",
    description: "We create responsive websites for modern businesses.",
    color: "bg-green-600",
  },
  {
  title: "UI/UX Design",
  description: "We design simple and user-friendly digital experiences.",
  color: "bg-orange-600",
},
]

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-20"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            OUR EXPERTISE
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Solutions Built For You
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            We combine technology and creativity to build digital
            solutions that help businesses grow.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Services