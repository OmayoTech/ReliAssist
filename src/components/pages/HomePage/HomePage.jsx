import HeroSection from "../../HeroSection";
// import Intro from "../../Intro";
import Support from "../../Support";
import Services from "../../Services";
import About from "../../About";
import Testimony from "../../Testimony";
import Started from "../../Started";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="w-full md:h-[924px] h-[820px] bg-cover bg-[url('/src/assets/new_background.png')] bg-no-repeat mb-[30%]">
        <Header />
        <HeroSection />
      </div>
      {/* <Intro /> */}
      <Support />
      <Services />
      <About />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default HomePage;
