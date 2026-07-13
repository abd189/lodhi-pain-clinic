import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import SectionHeading from './SectionHeading'

import doctorImg from '../assets/images/doctor-portrait.png'
import logoImg from '../assets/images/logo.jpg'
import acupunctureImg from '../assets/images/poster-acupuncture.jpg'
import cuppingImg from '../assets/images/poster-cupping.jpg'
import feesImg from '../assets/images/poster-fees.jpg'
import physiotherapyImg from '../assets/images/poster-physiotherapy.jpg'
import neuromuscularImg from '../assets/images/poster-neuromuscular.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  { src: logoImg, alt: 'Lodhi Pain Clinic logo' },
  { src: doctorImg, alt: 'Dr. Sardar Waris Lodhi portrait' },
  { src: neuromuscularImg, alt: 'Neuromuscular physical therapy treatment' },
  { src: acupunctureImg, alt: 'Acupuncture therapy at Lodhi Pain Clinic' },
  { src: cuppingImg, alt: 'Dry cupping therapy treatment' },
  { src: feesImg, alt: 'Lodhi Pain Clinic consultation information' },
  { src: physiotherapyImg, alt: 'Dr. Sardar Waris Lodhi - Physiotherapy session' },
  
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const showNext = () => setLightbox((i) => (i + 1) % images.length)
  const showPrev = () => setLightbox((i) => (i - 1 + images.length) % images.length)

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-mist">
      <div className="section-container">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Lodhi Pain Clinic"
          subtitle="A glimpse into our treatments, our team, and the caring environment we've built for your recovery."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1.15}
            centeredSlides={false}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.3 },
            }}
            className="!pb-12"
          >
            {images.map((img, i) => (
              <SwiperSlide key={img.alt}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setLightbox(i)}
                  className="block w-full rounded-2xl overflow-hidden shadow-card border border-slate-100 group"
                >
                  <div className="h-64 sm:h-72 overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-950/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close gallery"
              className="absolute top-5 right-5 text-white text-3xl p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightbox(null)}
            >
              <MdClose />
            </button>
            <button
              aria-label="Previous image"
              className="absolute left-3 sm:left-8 text-white text-4xl p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
            >
              <MdChevronLeft />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
            />
            <button
              aria-label="Next image"
              className="absolute right-3 sm:right-8 text-white text-4xl p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
            >
              <MdChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
