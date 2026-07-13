export const WHATSAPP_NUMBER = '923269500794'

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const WHATSAPP_LINKS = {
  appointment: buildWhatsAppLink('Hello Doctor, I would like to book an appointment.'),
  consultation: buildWhatsAppLink('Hello Doctor, I would like an online consultation.'),
  meeting: buildWhatsAppLink('Hello Doctor, I would like to schedule a meeting.'),
  general: `https://wa.me/${WHATSAPP_NUMBER}`,
}

export const CLINIC = {
  name: 'Lodhi Pain Clinic',
  subtitle: 'Physio Rehab Center',
  doctor: 'Dr. Sardar Waris Lodhi (PT)',
  qualifications: 'DPT | PGD Pain Management | MS-NMPT',
  tagline: 'Your Recovery is Our Priority',
  hospital: 'Ali Hospital Maternity Home',
  address: '19 A/Z, Model Town C, Bahawalpur',
  phone: '0305-4974223',
  altPhone: '062-2883455',
  timings: 'Monday – Saturday, 4:00 PM – 10:00 PM',
  consultationFee: 'Rs. 1,000',
  fridayCampFee: 'Rs. 400',
}
