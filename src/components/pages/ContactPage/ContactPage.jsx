import ContactHeroo from "../../ContactHeroo";
import Footer from "../../layouts/Footer/Footer";
import ServiceHeader from "../../ServiceHeader";

const ContactPage = () => {
  return (
    <div className="bg-cover bg-[url('/src/assets/serviceBG.png')] ">
      <div className="w-full md:h-[980px] h-[1400px] bg-cover bg-[url('/src/assets/serviceBG.png')] bg-no-repeat ">
        <ServiceHeader />
        <ContactHeroo />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
