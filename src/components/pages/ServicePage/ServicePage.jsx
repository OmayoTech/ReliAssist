import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import OurService from "../../OurService";
import ServiceHero from "../../ServiceHero";
import ServicePersonal from "../../ServicePersonal";

import ServiceStarted from "../../ServiceStarted";

const ServicePage = () => {
  return (
    <div>
      <Header />
      <ServiceHero />
      <OurService />
      <ServicePersonal />
      <ServiceStarted />
      <Footer />
    </div>
  );
};

export default ServicePage;
