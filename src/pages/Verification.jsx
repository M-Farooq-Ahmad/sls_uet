import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import VerificationSection from "../components/VerificationSection";
import farooq from '../assets/farooq_lefty.jpg'

export default function Verification() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamSection memberData={{
        role: "Chairman",
        name: "Farooq Baloch",
        program: "Automotive Engineer 22 UET Lahore",
        desc: "I’m honored to introduce the Serve and Lead Society, an initiative I proudly founded with the vision of empowering UET Lahore students through growth, opportunity, and service. Our mission is to help students unlock their potential, shape their careers, and make a meaningful impact through internships, welfare initiatives, and educational opportunities. I warmly invite all new students to join us — to serve with purpose, lead with passion, and grow together toward success and excellence.",
        img: farooq,
        align: "right",
      }} hide={true} />
      <VerificationSection />
      <Footer />
    </>
  );
}
