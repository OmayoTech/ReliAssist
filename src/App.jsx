import Header from "./components/layouts/Header/Header";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import Support from "./components/Support";
import Services from "./components/Services";
import About from "./components/About";
import Testimony from "./components/Testimony";
import Started from "./components/Started";
import Footer from "./components/layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ServicePage from "./components/pages/ServicePage/ServicePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className="w-full md:h-[770px] h-[890px] bg-[#FDF9FF]">
              <Header />
              <HeroSection />
            </div>
            <Intro />
            <Support />
            <Services />
            <About />
            <Testimony />
            <Started />
            <Footer />
          </div>
        }
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
