import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import SocialBenefit from "../../SocialBenefit";
import SocialDelivery from "../../SocialDelivery";
import SocialHero from "../../SocialHero";
import SocialSupport from "../../SocialSupport";

const SocialPage = () => {
  return (
    <div>
      <Header />
      <SocialHero />
      <SocialSupport />
      <SocialBenefit />
      <SocialDelivery />
      <Footer />
    </div>
  );
};

export default SocialPage;
