import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import TechnicalBenefit from "../../TechnicalBenefit";
import TechnicalDelivery from "../../TechnicalDelivery";
import TechnicalHero from "../../TechnicalHero";
import TechnicalSupport from "../../TechnicalSupport";

const TechnicalPage = () => {
  return (
    <div>
      <Header />
      <TechnicalHero />
      <TechnicalSupport />
      <TechnicalBenefit />
      <TechnicalDelivery />
      <Footer />
    </div>
  );
};

export default TechnicalPage;
