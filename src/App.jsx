import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import GovernmentProjects from './components/GovernmentProjects'
import Certifications from './components/Certifications'
import Process from './components/Process'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <WhatWeDo />
        <Products />
        <WhyChooseUs />
        <GovernmentProjects />
        <Certifications />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
