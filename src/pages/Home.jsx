import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EventsSection from "../components/EventsSection";
import CertificatesSection from "../components/CertificatesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EventsSection />
      <CertificatesSection />
      <Footer />
    </>
  );
}
