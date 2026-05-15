import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Instagram from './components/Instagram'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
	  <Gallery />
	  <Services />
	  <Instagram />
	  <CTA />
	  <Footer />
    </main>
  )
}