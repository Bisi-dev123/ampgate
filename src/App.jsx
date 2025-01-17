import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "/src/pages/Aboutus";
import Services from "/src/pages/Services";
import NotFound from "/src/pages/NotFound";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/services" element={<Services />} />

        {/* ====== NotFound Route (Catch all) ===== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
