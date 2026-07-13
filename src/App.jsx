import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Lodhi Pain Clinic | Physiotherapy & Rehabilitation Center | Bahawalpur</title>
        <meta
          name="description"
          content="Professional physiotherapy, neuromuscular rehabilitation, dry cupping, acupuncture and online consultations at Lodhi Pain Clinic, Bahawalpur."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lodhi Pain Clinic | Physiotherapy & Rehabilitation Center | Bahawalpur"
        />
        <meta
          property="og:description"
          content="Professional physiotherapy, neuromuscular rehabilitation, dry cupping, acupuncture and online consultations at Lodhi Pain Clinic, Bahawalpur."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:locale" content="en_PK" />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang="en" />
      </Helmet>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  )
}

export default App
