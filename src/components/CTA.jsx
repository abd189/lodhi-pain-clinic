import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'
import { WHATSAPP_LINKS, CLINIC } from '../data/contact'

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-primary-800 to-accent-700 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_80%,white,transparent_35%)]" />
      <div className="section-container relative text-center flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl"
        >
          Start Your Recovery Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/85 text-base sm:text-lg max-w-xl"
        >
          Book your appointment or schedule an online consultation with {CLINIC.doctor}.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-2"
        >
          <WhatsAppButton href={WHATSAPP_LINKS.appointment} size="lg" variant="solid-whatsapp">
            WhatsApp Appointment
          </WhatsAppButton>
          <WhatsAppButton href={WHATSAPP_LINKS.consultation} size="lg" variant="outline" icon={false}>
            Online Consultation
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
