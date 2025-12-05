import AboutHero from "../../AboutHero";
import AboutMission from "../../AboutMission";
import AboutReli from "../../AboutReli";
import AboutValues from "../../AboutValues";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Started from "../../Started";

const AboutPage = () => {
  return (
    <div>
      <div className="w-full md:h-[924px] h-[820px] bg-cover bg-[url('/src/assets/new_background.png')] bg-no-repeat mb-[30%]">
        <Header />
        <AboutHero />
      </div>
      <AboutReli />
      <AboutMission />
      <AboutValues />
      <Started />
      <Footer />
    </div>
  );
};

export default AboutPage;
