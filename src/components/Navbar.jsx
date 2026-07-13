import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import useScrollPosition from '../hooks/useScrollPosition'
import WhatsAppButton from './WhatsAppButton'
import { WHATSAPP_LINKS, CLINIC } from '../data/contact'
import logo from '../assets/images/logo.jpg'

const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Online Consultation', to: 'online-consultation' },
  { label: 'Why Choose Us', to: 'why-choose-us' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'FAQ', to: 'faq' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollPosition(30)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <img
            src={logo}
            alt={`${CLINIC.name} logo`}
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-xl bg-white shadow-card p-1"
          />
          <div className="leading-tight">
            <p className="font-display font-extrabold text-primary-800 text-sm sm:text-base tracking-tight">
              {CLINIC.name}
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-accent-600 uppercase tracking-wider">
              {CLINIC.subtitle}
            </p>
          </div>
        </ScrollLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth
                duration={500}
                offset={-90}
                spy
                activeClass="text-accent-600"
                className="cursor-pointer px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-700 transition-colors rounded-full hover:bg-primary-50"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton href={WHATSAPP_LINKS.appointment} size="sm">
            Book Appointment
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-primary-800 text-2xl p-2 rounded-lg hover:bg-primary-50 transition-colors"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white shadow-soft"
          >
            <ul className="section-container flex flex-col py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
              <li className="px-4 pt-2">
                <WhatsAppButton href={WHATSAPP_LINKS.appointment} className="w-full" size="sm">
                  Book Appointment
                </WhatsAppButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
