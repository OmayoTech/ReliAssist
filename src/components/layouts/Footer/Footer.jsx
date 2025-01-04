import { logo2 } from "../../../assets/";
import { Twitter } from "../../../assets/";
import { Telegram } from "../../../assets/";
import { Facebook } from "../../../assets/";
import { Instagram } from "../../../assets/";

const Footer = () => {
  return (
    <div className="md:h-[331px] bg-black text-white px-4 md:px-[150px]">
      <div className="flex-row md:flex items-start py-12 gap-20  md:h-[145px] mb-[120px] leading-[47px]">
        <div className="md:w-[247px] mt-2 mb-4">
          <img src={logo2} alt="" />
        </div>
        <div className="font-Rale font-semibold text-[16px] mb-4">
          <p>About</p>
          <p>Services</p>
          <p>Contact us</p>
        </div>
        <div className="font-Rale font-semibold text-[16px] mb-4">
          <p>Pricing</p>
          <p>Services</p>
          <p>Testimonials</p>
        </div>
        <div className="font-Rale font-semibold text-[16px] mb-4">
          <p>Privacy</p>
          <p>Terms of Service</p>
          <p>Copyright</p>
        </div>
        <div className="font-Rale font-semibold text-[16px] ">
          <p>Social Media</p>
          <div className="flex gap-8">
            <img src={Twitter} alt="" />
            <img src={Telegram} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
      </div>
      <p className="font-Rale font-semibold text-[16px]">
        Powered By Omoayo Tech
      </p>
    </div>
  );
};

export default Footer;
