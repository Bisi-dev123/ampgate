import { Route, Routes, useLocation } from "react-router-dom";

// import LandingPage from "/src/pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutUs from "/src/pages/Aboutus";
import Services from "/src/pages/Services";
import NotFound from "/src/pages/NotFound";
import ContactUs from "./pages/ContactUs";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />

        {/* ====== NotFound Route (Catch all) ===== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
