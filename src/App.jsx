import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import VizMisyonPage from './pages/VizMisyonPage'
import KalitePolitikaPage from './pages/KalitePolitikaPage'
import DizelJeneratorPage from './pages/DizelJeneratorPage'
import PortatifJeneratorPage from './pages/PortatifJeneratorPage'
import PanolarPage from './pages/PanolarPage'
import KabinSetleriPage from './pages/KabinSetleriPage'
import GucYerTespiti from './pages/GucYerTespiti'
import PeriyodikBakimPage from './pages/PeriyodikBakimPage'
import KiralamaPage from './pages/KiralamaPage'
import GucHesabiPage from './pages/GucHesabiPage'
import HakkimizdaPage from './pages/HakkimizdaPage'
import YakitTuketimPage from './pages/YakitTuketimPage'
import UpsPage from './pages/UpsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/vizyon-misyon" element={<VizMisyonPage />} />
            <Route path="/sirket/vizyon-misyon" element={<VizMisyonPage />} />
            <Route path="/sirket/kalite-politika" element={<KalitePolitikaPage />} />
            <Route path="/urunler/dizel-jeneratorler" element={<DizelJeneratorPage />} />
            <Route path="/urunler/portatif-jeneratorler" element={<PortatifJeneratorPage />} />
            <Route path="/urunler/panolar" element={<PanolarPage />} />
            <Route path="/urunler/jenerator-kabin-setleri" element={<KabinSetleriPage />} />
            <Route path="/hizmetler/guc-yer-tespiti" element={<GucYerTespiti />} />
            <Route path="/hizmetler/periyodik-bakim" element={<PeriyodikBakimPage />} />
            <Route path="/hizmetler/kiralama" element={<KiralamaPage />} />
            <Route path="/teknik-bilgiler/guc-hesabi" element={<GucHesabiPage />} />
            <Route path="/teknik-bilgiler/yakit-tuketimi" element={<YakitTuketimPage />} />
            <Route path="/urunler/ups" element={<UpsPage />} />
            <Route path="/sirket/hakkimizda" element={<HakkimizdaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
