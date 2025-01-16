import Footer from "../components/footer/Footer";
import AboutUs from "../components/landingPage/AboutUs";
import Faq from "../components/landingPage/Faq";
import Hero from "../components/landingPage/Hero";
import Testimonials from "../components/landingPage/Testimonials";
import TrustedPartners from "../components/landingPage/TrustedPartners";
import WhatDrivesUs from "../components/landingPage/WhatDrivesUs";
import MissionVisionSection from "../components/MissionVisionSection";
import OurProductSection from "../components/OurProductSection";
import PowerUpSection from "../components/PowerUpSection";
import ServicesSection from "../components/ServicesSection";

export default function LandingPage() {
  return (
    <div className="bg-[#F8F7F3]">
      {/* ===Hero section=== */}
      <Hero />
      {/* === Trusted Partners === */}
      <TrustedPartners />
      {/* === what sets us apart ===  */}
      <OurProductSection productImage="/setapart-image.png" />
      {/* === Services ===  */}
      <ServicesSection />
      {/* === About Us === */}
      <AboutUs />
      {/* === What drives us === */}
      <WhatDrivesUs />
      <MissionVisionSection />
      {/* === Testimonials === */}
      <Testimonials />
      {/* === Faq === */}
      <Faq />
      {/* === Power up Business section === */}
      <PowerUpSection />
      {/* === Footer=== */}
      <Footer />
    </div>
  );
}
