import { useState } from "react"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Delphics Driving Test",
    description:
      "An online platform that helps learners prepare for driving theory examinations.",
    category: "Web Application",
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Business Website",
    description:
      "A modern responsive website designed to help businesses present their services online.",
    category: "Web Design",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Creative Brand Design",
    description:
      "A professional visual identity project including branding and digital graphics.",
    category: "Graphic Design",
    technologies: ["Photoshop", "Illustrator", "Branding"],
  },
  {
    title: "Zamura Platform",
    description:
      "A digital platform connecting users with jobs, properties, and consultancy services.",
    category: "Full Stack Application",
    technologies: ["React", "Express", "MySQL"],
  },
  {
    title: "Business Dashboard",
    description:
      "A modern dashboard interface for managing business information and activities.",
    category: "Dashboard",
    technologies: ["React", "Tailwind CSS"],
  },
]

function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3)

  return (
    <section
      id="projects"
      className="bg-slate-50 py-20"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            OUR WORK
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Projects We Have Built
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Explore some of the digital products and creative projects
            developed by Delphics.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              category={project.category}
              technologies={project.technologies}
            />
          ))}

        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">

          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 text-white px-7 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-xl"
          >
            {showAll ? "Show Less ↑" : "View All Projects →"}
          </button>

        </div>

      </div>

    </section>
  )
}

export default Projects