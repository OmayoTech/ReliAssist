import CustomerBenefit from "../../CustomerBenefit";
import CustomerDelivery from "../../CustomerDelivery";
import CustomerHero from "../../CustomerHero";
import CustomerSupport from "../../CustomerSupport";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const CustomerPage = () => {
  return (
    <div>
      <Header />
      <CustomerHero />
      <CustomerSupport />
      <CustomerBenefit />
      <CustomerDelivery />
      <Footer />
    </div>
  );
};

export default CustomerPage;
