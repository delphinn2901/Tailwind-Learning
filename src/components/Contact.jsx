import { useState } from "react"


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => {
  e.preventDefault()

  console.log(formData)
  setSubmitted(true)
}
{submitted && (
  <div className="mt-8 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
    Thanks! Your message has been received.
  </div>
)}


  return (
    <section id="contact-form" className="bg-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-2xl mx-auto text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Let's Talk About Your Project
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Have an idea or project in mind? Send us a message
            and let's build something together.
          </p>

          <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-6 text-left"
>

  {/* Name */}
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      Your Name
    </label>

    <input
  type="text"
  placeholder="Enter your name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      Email Address
    </label>
<input
  type="email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      Message
    </label>

  <textarea
  rows="5"
  placeholder="Tell us about your project..."
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-xl"
  >
    Send Message →
  </button>

</form>

        </div>

      </div>

    </section>
  )
}

export default Contact