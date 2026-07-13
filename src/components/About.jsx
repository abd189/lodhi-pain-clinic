import { motion } from 'framer-motion'
import { FaMoneyBillWave, FaCalendarCheck, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { CLINIC } from '../data/contact'
import doctorImg from '../assets/images/doctor-portrait.png'

const infoCards = [
  {
    icon: FaMoneyBillWave,
    title: 'Consultation Fee',
    value: CLINIC.consultationFee,
    note: 'Expert evaluation & treatment plan',
  },
  {
    icon: FaCalendarCheck,
    title: 'Friday Physio Camp',
    value: CLINIC.fridayCampFee,
    note: 'Every Friday, affordable rehab access',
  },
  {
    icon: FaClock,
    title: 'Clinic Timings',
    value: '4 PM \u2013 10 PM',
    note: 'Monday \u2013 Saturday',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Ali Hospital & Maternity Home',
    note: CLINIC.address,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-100 to-primary-100" />
            <img
              src={doctorImg}
              alt={CLINIC.doctor}
              className="relative w-64 sm:w-72 rounded-[2rem] object-cover shadow-soft border-4 border-white"
            />
            <div className="absolute -top-5 -right-5 bg-accent-500 text-white rounded-2xl px-4 py-3 shadow-card text-center">
              <p className="text-xl font-extrabold leading-none">5+</p>
              <p className="text-[10px] uppercase tracking-wide mt-1">Years Exp.</p>
            </div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="About Your Physiotherapist"
            title={
              <>
                Meet <span className="gradient-text">{CLINIC.doctor}</span>
              </>
            }
            subtitle={`A Specialist in Pain Management and Neuromuscular Physiotherapy, dedicated to restoring movement and quality of life.  
With a focus on personalized, evidence-based rehabilitation, Dr. Lodhi helps patients recover naturally and effectively, minimizing the need for medication or invasive procedures.`}
          />

          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-mist border border-slate-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-700 text-white flex items-center justify-center text-xl">
                  <card.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                    {card.title}
                  </p>
                  <p className="text-base font-bold text-ink mt-0.5">{card.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{card.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
