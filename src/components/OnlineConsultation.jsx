import { motion } from 'framer-motion'
import { FaVideo, FaComments, FaDumbbell, FaHome } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'
import SectionHeading from './SectionHeading'
import { WHATSAPP_LINKS } from '../data/contact'

const options = [
  {
    icon: FaVideo,
    title: 'Video Consultation',
    description: 'Face-to-face consultation with Dr. Waris from anywhere.',
  },
  {
    icon: FaComments,
    title: 'WhatsApp Consultation',
    description: 'Quick, convenient guidance directly over WhatsApp chat.',
  },
  {
    icon: FaDumbbell,
    title: 'Exercise Guidance',
    description: 'Personalized exercise instructions for your condition.',
  },
  {
    icon: FaHome,
    title: 'Home Rehabilitation Plan',
    description: 'A structured recovery plan you can follow at home.',
  },
]

export default function OnlineConsultation() {
  return (
    <section
      id="online-consultation"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />

      <div className="section-container relative">
        <SectionHeading
          light
          eyebrow="Consult From Anywhere"
          title="Can't Visit the Clinic? Consult Online"
          subtitle={
            <>
              Consult with Dr. Sardar Waris Lodhi from the comfort of your home. Patients
              from anywhere in Pakistan, or internationally, can get guidance on pain
              management, physiotherapy, rehabilitation planning, posture correction, and
              exercise programs.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-white bg-white/10 border-white/20"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500 text-white text-xl mb-4">
                <option.icon />
              </span>
              <h3 className="font-bold text-lg mb-1.5">{option.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <WhatsAppButton href={WHATSAPP_LINKS.consultation} size="lg" variant="solid-whatsapp">
            Book Online Consultation
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
