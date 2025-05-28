import Footer from "/src/components/footer/Footer";
import AboutUs from "/src/components/landingPage/AboutUs";
import Faq from "/src/components/landingPage/Faq";
import Hero from "/src/components/landingPage/Hero";
import Testimonials from "/src/components/landingPage/Testimonials";
import WhatDrivesUs from "/src/components/landingPage/WhatDrivesUs";
import MissionVisionSection from "/src/components/MissionVisionSection";
import OurProductSection from "/src/components/OurProductSection";
import PowerUpSection from "/src/components/PowerUpSection";
import ServicesSection from "/src/components/ServicesSection";

export default function HomePage() {
  return (
    <div className="bg-[#F8F7F3]">
      {/* ===Hero section=== */}
      <Hero />
      {/* === Trusted Partners === */}
      {/* <TrustedPartners /> */}
      {/* === what sets us apart ===  */}
      <OurProductSection />
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
