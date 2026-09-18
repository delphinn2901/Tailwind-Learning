import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <Navbar />

  

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App