import Footer from "../../layouts/Footer/Footer";

import Testimony from "../../Testimony";
import TechnicalHero from "../../TechnicalHero";
import TechnicalSupport from "../../TechnicalSupport";
import Started from "../../Started";
import ServiceHeader from "../../ServiceHeader";

const TechnicalPage = () => {
  return (
    <div>
      <div className="w-full md:h-[900px] h-[1500px] bg-cover bg-[url('/src/assets/serviceBG.png')] bg-no-repeat md:mb-[10%]">
        <ServiceHeader />
        <TechnicalHero />
      </div>
      <TechnicalSupport />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default TechnicalPage;
