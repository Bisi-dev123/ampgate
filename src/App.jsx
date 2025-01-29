import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ContactUsPage from "./pages/ContactUsPage";
import Aboutus from "./pages/Aboutus";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/services" element={<Services />} />

        {/* ====== NotFound Route (Catch all) ===== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
