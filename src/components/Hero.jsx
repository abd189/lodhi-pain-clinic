import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import WhatsAppButton from './WhatsAppButton'
import { WHATSAPP_LINKS, CLINIC } from '../data/contact'
import doctorImg from '../assets/images/doctor-portrait.png'

const stats = [
  { end: 3, suffix: '+', label: 'Years Experience' },
  { end: 1000, suffix: '+', label: 'Patients Treated' },
  { end: 18, suffix: '+', label: 'Specialized Therapies' },
  { end: 98, suffix: '%', label: 'Patient Satisfaction' },
]

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-mist"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 bg-hero-blob pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-accent-200/40 rounded-full blur-3xl animate-blob pointer-events-none [animation-delay:3s]" />

      <div className="section-container relative grid lg:grid-cols-2 gap-14 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <span className="eyebrow w-fit">{CLINIC.subtitle} &middot; Bahawalpur</span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.12] text-ink">
            Restore Movement.
            <br />
            <span className="gradient-text">Relieve Pain.</span>
            <br />
            Live Better.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Personalized physiotherapy and rehabilitation programs designed to help you
            recover naturally without unnecessary medication or surgery.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <WhatsAppButton href={WHATSAPP_LINKS.appointment} size="lg" variant="solid-whatsapp">
              Book Appointment
            </WhatsAppButton>
            <WhatsAppButton
              href={WHATSAPP_LINKS.consultation}
              size="lg"
              variant="outline-primary"
              icon={false}
            >
              Online Consultation
            </WhatsAppButton>
          </div>

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-slate-200">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-primary-800 font-display">
                  {inView && <CountUp end={stat.end} duration={2} suffix={stat.suffix} />}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary-200/50 via-transparent to-accent-200/50 rounded-[2.5rem] blur-2xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow border-4 border-white animate-float">
              <img
                src={doctorImg}
                alt={`${CLINIC.doctor} - Physiotherapist at Lodhi Pain Clinic`}
                className="w-72 sm:w-80 lg:w-[22rem] h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-card">
              <p className="text-sm font-bold text-primary-800">{CLINIC.doctor}</p>
              <p className="text-xs text-slate-600 mt-0.5">{CLINIC.qualifications}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
