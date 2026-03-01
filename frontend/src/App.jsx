import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RequestService from "./pages/RequestService";
import CaseStudy from "./pages/CaseStudy";
import ServiceDetail from "./pages/ServiceDetail";
import PrivacyPolicy from "./pages/Privacy";
import TermsConditions from "./pages/Terms";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request/:serviceName" element={<RequestService />} />
        <Route path="/case-study/:projectSlug" element={<CaseStudy />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />}/>
        <Route path="/supports" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}