import AboutHero from "../../AboutHero";
import AboutMission from "../../AboutMission";
import AboutValues from "../../AboutValues";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Started from "../../Started";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <Started />
      <Footer />
    </div>
  );
};

export default AboutPage;
