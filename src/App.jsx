import { useState } from "react";
import Navbar from "./component/aset/navbar";
import Home from "./component/home";
import Profil from "./component/profil";
import Fasilitas from "./component/fasilitas";
import Pengaduan from "./component/pengaduan";
import Informasi from "./component/informasi";
import Hubungi from "./component/hubungi";
import Footer from "./component/aset/footer";
import Dokter from "./component/dokter";
import ProfilDokter from "./component/aset/profil_dokter";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleViewDoctorProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentPage('profil_dokter');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'profil':
        return <Profil />;
      case 'fasilitas':
        return <Fasilitas />;
      case 'pengaduan':
        return <Pengaduan />;
      case 'informasi':
        return <Informasi />;
      case 'hubungi':
        return <Hubungi />;
      case 'dokter':
        return <Dokter onViewProfile={handleViewDoctorProfile} />;
      case 'profil_dokter':
        return <ProfilDokter doctor={selectedDoctor} onBack={() => handleNavigate('dokter')} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      <main className="flex-grow pt-[120px] md:pt-[125px]">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
