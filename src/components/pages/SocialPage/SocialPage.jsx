import Footer from "../../layouts/Footer/Footer";
import ServiceHeader from "../../ServiceHeader";

import SocialHero from "../../SocialHero";
import SocialSupport from "../../SocialSupport";
import Started from "../../Started";
import Testimony from "../../Testimony";

const SocialPage = () => {
  return (
    <div>
      <div className="w-full md:h-[900px] h-[1500px] bg-cover bg-[url('/src/assets/serviceBG.png')] bg-no-repeat md:mb-[10%] mb-0">
        <ServiceHeader />
        <SocialHero />
      </div>
      <SocialSupport />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default SocialPage;
