import { FaWhatsapp } from 'react-icons/fa'

/**
 * Reusable button that opens WhatsApp with a pre-filled message.
 * variant: 'solid-primary' | 'solid-whatsapp' | 'outline' | 'ghost'
 */
export default function WhatsAppButton({
  href,
  children,
  variant = 'solid-primary',
  icon = true,
  size = 'md',
  className = '',
}) {
  const base =
    'btn-ripple inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-sm sm:text-base',
    lg: 'px-8 py-4 text-base sm:text-lg',
  }

  const variants = {
    'solid-primary':
      'bg-primary-700 text-white shadow-soft hover:bg-primary-800 hover:-translate-y-0.5 focus-visible:ring-primary-400',
    'solid-whatsapp':
      'bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] hover:bg-[#1fb958] hover:-translate-y-0.5 focus-visible:ring-green-300',
    outline:
      'border-2 border-white/80 text-white hover:bg-white hover:text-primary-800 focus-visible:ring-white',
    'outline-primary':
      'border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white focus-visible:ring-primary-300',
    ghost: 'text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-300',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {icon && <FaWhatsapp className="text-lg" />}
      {children}
    </a>
  )
}
