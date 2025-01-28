import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import ServiceHero from "../../ServiceHero";
import ServicePersonal from "../../ServicePersonal";
import Services from "../../Services";
import ServiceStarted from "../../ServiceStarted";

const ServicePage = () => {
  return (
    <div>
      <Header />
      <ServiceHero />
      <Services />
      <ServicePersonal />
      <ServiceStarted />
      <Footer />
    </div>
  );
};

export default ServicePage;
