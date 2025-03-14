import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import TechBenefits from "../../TechBenefits";
import TechDelivery from "../../TechDelivery";
import TechHero from "../../TechHero";
import TechSupport from "../../TechSupport";

const TechPage = () => {
  return (
    <div>
      <Header />
      <TechHero />
      <TechSupport />
      <TechBenefits />
      <TechDelivery />
      <Footer />
    </div>
  );
};

export default TechPage;
