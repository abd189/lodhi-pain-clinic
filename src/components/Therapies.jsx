import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { therapies } from '../data/therapies'

export default function Therapies() {
  return (
    <section id="therapies" className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Therapies"
          title="Natural, Evidence-Based Healing Methods"
          subtitle="Every therapy is delivered by trained professionals using techniques proven to relieve pain and restore function."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {therapies.map((therapy, i) => (
            <motion.div
              key={therapy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden shadow-card border border-slate-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={therapy.image}
                  alt={therapy.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold mb-1.5">{therapy.title}</h3>
                <p className="text-sm text-white/85 leading-relaxed">{therapy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
