import AdminBenefit from "../../AdminBenefit";
import AdminDelivery from "../../AdminDelivery";
import AdminHero from "../../AdminHero";
import AdminSupport from "../../AdminSupport";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const AdminPage = () => {
  return (
    <div>
      <Header />
      <AdminHero />
      <AdminSupport />
      <AdminBenefit />
      <AdminDelivery />
      <Footer />
    </div>
  );
};

export default AdminPage;
