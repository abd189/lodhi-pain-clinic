import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import useScrollPosition from '../hooks/useScrollPosition'
import { WHATSAPP_LINKS } from '../data/contact'

export default function FloatingButtons() {
  const scrolled = useScrollPosition(400)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-primary-800 text-white shadow-soft flex items-center justify-center hover:bg-primary-700 transition-colors"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_LINKS.general}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] flex items-center justify-center text-2xl"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <FaWhatsapp className="relative" />
      </motion.a>
    </div>
  )
}
