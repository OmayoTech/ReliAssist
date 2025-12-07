import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ServicePage from "./components/pages/ServicePage/ServicePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import AdminPage from "./components/pages/AdminPage/AdminPage";
import CustomerPage from "./components/pages/CustomerPage/CustomerPage";
import TechnicalPage from "./components/pages/TechnicalPage/TechnicalPage";
import SocialPage from "./components/pages/SocialPage/SocialPage";
import TechPage from "./components/pages/TechPage/TechPage";
import PricingPage from "./components/pages/PricingPage/PricingPage";
import HomePage from "./components/pages/HomePage/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import CreativePage from "./components/pages/CreativePage/CreativePage";
import BlogDetails from "./components/pages/BlogDetails/BlogDetails";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/technical" element={<TechnicalPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/creative" element={<CreativePage />} />
        <Route path="/blog" element={<BlogDetails />} />
      </Routes>
    </Router>
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <div>
    //         <div className="w-full md:h-[770px] h-[890px] bg-[#FDF9FF]">
    //           <Header />
    //           <HeroSection />
    //         </div>
    //         <Intro />
    //         <Support />
    //         <Services />
    //         <About />
    //         <Testimony />
    //         <Started />
    //         <Footer />
    //       </div>
    //     }
    //   />
    //   <Route path="/about" element={<AboutPage />} />
    //   <Route path="/service" element={<ServicePage />} />
    //   <Route path="/contact" element={<ContactPage />} />
    //   <Route path="/admin" element={<AdminPage />} />
    //   <Route path="/customer" element={<CustomerPage />} />
    //   <Route path="/technical" element={<TechnicalPage />} />
    //   <Route path="/social" element={<SocialPage />} />
    //   <Route path="/tech" element={<TechPage />} />
    //   <Route path="/pricing" element={<PricingPage />} />
    //
    // </Routes>
  );
}

export default App;
