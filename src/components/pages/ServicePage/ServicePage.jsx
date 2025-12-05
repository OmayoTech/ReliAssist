import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import OurService from "../../OurService";
import ServiceHero from "../../ServiceHero";
import Started from "../../Started";
import Testimony from "../../Testimony";

const ServicePage = () => {
  return (
    <div>
      <div className="w-full md:h-[924px] h-[870px] bg-cover bg-[url('/src/assets/new_background.png')] bg-no-repeat mb-[25%]">
        <Header />
        <ServiceHero />
      </div>
      <OurService />
      <Testimony />
      <Started />
      <Footer />
    </div>
  );
};

export default ServicePage;
