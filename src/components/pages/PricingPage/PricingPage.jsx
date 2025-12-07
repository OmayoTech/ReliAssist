import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import PricingDelivery from "../../PricingDelivery";
import PricingHero from "../../PricingHero";

const PricingPage = () => {
  return (
    <div>
      <Header />
      <PricingHero />
      <PricingDelivery />
      <Footer />
    </div>
  );
};

export default PricingPage;
