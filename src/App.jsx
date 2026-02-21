
import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"
import { Footer } from "./layout/Footer"



function App() {

  return (
    <div className="min-h-screen overflow-hidden">
   <Navbar />

   <main>
    
     <div id="hero" className="scroll-mt-20"><Hero /></div>
      <div id="about" className="scroll-mt-20"><About /></div>
      <div id="experience" className="scroll-mt-20"><Experience /></div>
      <div id="projects" className="scroll-mt-20"><Projects /></div>
      <div id="testimonials" className="scroll-mt-20"><Testimonials /></div>
      <div id="contact" className="scroll-mt-20"><Contact /></div>
   </main>
   <Footer/>

    </div>
  )
}

export default App
