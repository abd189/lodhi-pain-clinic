import { motion } from 'framer-motion'
import {
  FaUserCheck,
  FaAward,
  FaBookMedical,
  FaLeaf,
  FaCogs,
  FaComments,
  FaMoneyBillWave,
  FaLaptopMedical,
  FaFemale,
  FaHeart,
} from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const reasons = [
  { icon: FaUserCheck, title: 'Personalized Treatment Plans' },
  { icon: FaAward, title: 'Experienced Physical Therapist' },
  { icon: FaBookMedical, title: 'Evidence Based Care' },
  { icon: FaLeaf, title: 'Drug-Free Treatment' },
  { icon: FaCogs, title: 'Modern Rehabilitation Techniques' },
  { icon: FaComments, title: 'One-on-One Consultation' },
  { icon: FaMoneyBillWave, title: 'Affordable Fees' },
  { icon: FaLaptopMedical, title: 'Online Consultation Available' },
  { icon: FaFemale, title: 'Female Therapist Available' },
  { icon: FaHeart, title: 'Patient Focused Care' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Patients Trust Us"
          title="A Higher Standard of Physiotherapy Care"
          subtitle="Every treatment plan is built around one goal: helping you recover fully, naturally, and with dignity."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.08 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-mist border border-slate-100 hover:bg-white hover:shadow-card transition-all duration-300"
            >
              <span className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-700 to-accent-500 text-white flex items-center justify-center text-2xl">
                <reason.icon />
              </span>
              <p className="text-sm font-semibold text-ink leading-snug">{reason.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
