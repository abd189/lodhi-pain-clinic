import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'
import SectionHeading from './SectionHeading'
import { conditions } from '../data/conditions'

export default function Conditions() {
  return (
    <section id="conditions" className="py-20 sm:py-28 bg-mist">
      <div className="section-container">
        <SectionHeading
          eyebrow="Conditions We Treat"
          title="Expert Care for a Wide Range of Conditions"
          subtitle="Whatever pain or mobility challenge you're facing, our therapies are designed to address the root cause, not just the symptoms."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-14">
          {conditions.map((condition, i) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3.5 shadow-sm border border-slate-100 hover:border-accent-300 hover:shadow-card transition-all duration-300"
            >
              <MdCheckCircle className="text-accent-500 text-xl flex-shrink-0" />
              <span className="text-sm font-medium text-ink">{condition}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
