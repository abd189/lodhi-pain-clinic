import { Link } from 'react-router-dom'
import { CLINIC, WHATSAPP_LINKS } from '../data/contact'
import WhatsAppButton from '../components/WhatsAppButton'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-mist">
      <p className="text-7xl font-extrabold text-primary-800 font-display">404</p>
      <h1 className="text-2xl font-bold text-ink mt-4">Page Not Found</h1>
      <p className="text-slate-600 mt-2 max-w-md">
        The page you're looking for doesn't exist. Let's get you back to {CLINIC.name}.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-primary-700 text-white font-semibold hover:bg-primary-800 transition-colors"
        >
          Back to Home
        </Link>
        <WhatsAppButton href={WHATSAPP_LINKS.general} variant="solid-whatsapp">
          Chat on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  )
}
