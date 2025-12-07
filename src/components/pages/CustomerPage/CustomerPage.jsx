import CustomerHero from "../../CustomerHero";
import CustomerSupport from "../../CustomerSupport";
import Footer from "../../layouts/Footer/Footer";
import ServiceHeader from "../../ServiceHeader";

import Started from "../../Started";
import Testimony from "../../Testimony";

const CustomerPage = () => {
  return (
    <div>
      <div className="w-full md:h-[900px] h-[1500px] bg-cover bg-[url('/src/assets/serviceBG.png')] bg-no-repeat md:mb-[10%]">
        <ServiceHeader />
        <CustomerHero />
      </div>
      <CustomerSupport />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default CustomerPage;
