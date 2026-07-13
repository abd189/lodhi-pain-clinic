import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { services } from '../data/services'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-mist">
      <div className="section-container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Physiotherapy & Rehabilitation Services"
          subtitle="From everyday pain relief to complex neurological rehabilitation, our therapies are tailored to your unique recovery journey."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:border-accent-200 transition-colors duration-300"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-700 to-accent-500 text-white text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </span>
              <h3 className="text-lg font-bold text-ink mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
