import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ServedArea from "../pages/ServedArea/ServedArea";
import Fleet from "../pages/Fleet/Fleet";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/Legal/PrivacyPolicy";
import TermsOfService from "../pages/Legal/TermsOfService";
import CancellationPolicy from "../pages/Legal/CancellationPolicy";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="served-area" element={<ServedArea />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="legal/terms-of-service" element={<TermsOfService />} />
        <Route path="legal/cancellation-policy" element={<CancellationPolicy />} />
        {/* Catch-all */}
        <Route path="*" element={<Home />} />
      </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
