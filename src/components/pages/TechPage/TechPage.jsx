import Footer from "../../layouts/Footer/Footer";
import Started from "../../Started";
import ServiceHeader from "../../ServiceHeader";
import TechSupport from "../../TechSupport";
import TechHero from "../../TechHero";
import Testimony from "../../Testimony";

const TechPage = () => {
  return (
    <div>
      <div className="w-full md:h-[900px] h-[1500px] bg-cover bg-[url('/src/assets/serviceBG.png')] bg-no-repeat md:mb-[10%]">
        <ServiceHeader />
        <TechHero />
      </div>
      <TechSupport />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default TechPage;
