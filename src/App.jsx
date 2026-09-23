import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <Navbar />

  

      {/* Services */}
      <Services />

 <Projects />

      {/* About */}n
      <About />

      {/* Contact */}
<Contact />

{/* CTA */}
<CTA />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App