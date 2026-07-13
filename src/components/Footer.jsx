import { Link as ScrollLink } from 'react-scroll'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { CLINIC, WHATSAPP_LINKS } from '../data/contact'
import logo from '../assets/images/logo.jpg'

const quickLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Online Consultation', to: 'online-consultation' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
]

const socials = [
  { icon: FaWhatsapp, href: WHATSAPP_LINKS.general, label: 'WhatsApp' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="section-container grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt={`${CLINIC.name} logo`} className="h-11 w-11 rounded-xl bg-white p-1 object-contain" />
            <div>
              <p className="font-display font-extrabold">{CLINIC.name}</p>
              <p className="text-xs text-accent-300 uppercase tracking-wide">{CLINIC.subtitle}</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{CLINIC.tagline}</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-white/70">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  className="text-sm text-white/70 hover:text-accent-300 cursor-pointer transition-colors"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-white/70">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-white/70">
            <li>{CLINIC.address}</li>
            <li>{CLINIC.phone}</li>
            <li>{CLINIC.timings}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-white/70">Follow Us</h4>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container mt-12 pt-6 border-t border-white/10 text-center">
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} {CLINIC.name} {'\u2014'} {CLINIC.subtitle}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
