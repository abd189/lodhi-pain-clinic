import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaHospital } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import WhatsAppButton from './WhatsAppButton'
import { CLINIC, WHATSAPP_LINKS } from '../data/contact'

const details = [
  { icon: FaMapMarkerAlt, label: 'Address', value: CLINIC.address },
  { icon: FaPhoneAlt, label: 'Phone', value: `${CLINIC.phone} / ${CLINIC.altPhone}` },
  { icon: FaHospital, label: 'Hospital', value: CLINIC.hospital },
  { icon: FaClock, label: 'Working Hours', value: CLINIC.timings },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Visit or Contact Lodhi Pain Clinic"
          subtitle="We're here to answer your questions and help you start your recovery journey."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-mist border border-slate-100"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center text-xl">
                  <d.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                    {d.label}
                  </p>
                  <p className="text-base font-semibold text-ink mt-0.5">{d.value}</p>
                </div>
              </div>
            ))}

            <WhatsAppButton href={WHATSAPP_LINKS.appointment} size="lg" variant="solid-whatsapp" className="mt-2">
              Chat on WhatsApp
            </WhatsAppButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card border border-slate-100 min-h-[360px]"
          >
            <iframe
              title="Lodhi Pain Clinic Location"
              src="https://www.google.com/maps?q=Model+Town+C,+Bahawalpur,+Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
