import Header from "./components/layouts/Header/Header";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import Support from "./components/Support";
import Services from "./components/Services";
import About from "./components/About";
import Testimony from "./components/Testimony";
import Started from "./components/Started";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
