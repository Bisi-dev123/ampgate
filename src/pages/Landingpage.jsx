import Footer from "../components/footer/Footer";
import AboutUs from "../components/landingPage/AboutUs";
import Faq from "../components/landingPage/Faq";
import Hero from "../components/landingPage/Hero";
import LetsTalk from "../components/landingPage/LetsTalk";
import Services from "../components/landingPage/Services";
import Testimonials from "../components/landingPage/Testimonials";
import TrustedPartners from "../components/landingPage/TrustedPartners";
import WhatDrivesUs from "../components/landingPage/WhatDrivesUs";
import WhatSetsUsApart from "../components/landingPage/WhatSetsUsApart";
import Navbar from "../components/navbar/Navbar";

export default function LandingPage() {
  return (
    <div>
      {/* === Navbar ==== */}
      <Navbar />
      {/* ===Hero section=== */}
      <Hero />
      {/* === Trusted Partners === */}
      <TrustedPartners />
      {/* === what sets us apart ===  */}
      <WhatSetsUsApart />
      {/* === Services ===  */}
      <Services />
      {/* === About Us === */}
      <AboutUs />
      {/* === What drives us === */}
      <WhatDrivesUs />
      {/* === Testimonials === */}
      <Testimonials />
      {/* === Faq === */}
      <Faq />
      {/* === Lets talk === */}
      <LetsTalk />
      {/* === Footer=== */}
      <Footer />
    </div>
  );
}
