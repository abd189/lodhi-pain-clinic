import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          subtitle="Real recoveries, real relief. Here's what patients of Lodhi Pain Clinic have to share."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="h-full flex flex-col bg-mist rounded-3xl p-7 border border-slate-100 shadow-card">
                  <FaQuoteLeft className="text-3xl text-accent-300 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FaStar key={idx} className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{t.text}</p>
                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
