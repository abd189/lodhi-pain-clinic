import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import OnlineConsultation from '../components/OnlineConsultation'
import WhyChooseUs from '../components/WhyChooseUs'
import Conditions from '../components/Conditions'
import Therapies from '../components/Therapies'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OnlineConsultation />
      <WhyChooseUs />
      <Conditions />
      <Therapies />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
