import { logo2 } from "../../../assets/";
import { Twitter } from "../../../assets/";
import { linkedin } from "../../../assets/";
import { Facebook } from "../../../assets/";
import { Instagram } from "../../../assets/";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:h-[331px] xl:h[310px] bg-black text-white px-4 xl:px-[70px] md:px-[150px]">
      <div className="w-full flex-row md:flex items-start py-12 gap-20  md:h-[145px] mb-[120px] leading-[47px]">
        <div className="md:w-[247px] mt-2 mb-4">
          <img src={logo2} alt="" />
        </div>
        <div className="flex justify-between px-[20px] mb-8 md:flex md:gap-16 ">
          <div className="font-Rale font-semibold text-[16px] mb-4">
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/service">
              <p>Services</p>
            </Link>
            <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
              <p>Contact us</p>
            </a>
          </div>
          <div className="font-Rale font-semibold text-[16px] mb-4">
            <p>Pricing</p>
            <Link to="/service">
              <p>Services</p>
            </Link>
            <p>Testimonials</p>
          </div>
        </div>
        <div className="flex justify-between px-[20px] md:flex md:gap-16">
          <div className="font-Rale font-semibold text-[16px] mb-4">
            <a href="https://sable-raja-9e9.notion.site/Privacy-Policy-170c2b79320f808aaa7cd20a4d9dde47?pvs=4">
              <p>Privacy</p>
            </a>
            <a href="https://sable-raja-9e9.notion.site/Terms-of-Service-172c2b79320f80c6af23de56490d232d?pvs=4">
              <p>Terms of Service</p>
            </a>
            <p>Copyright</p>
          </div>
          <div className="font-Rale font-semibold text-[16px] ">
            <p>Social Media</p>
            <div className="md:flex gap-4">
              <img src={Twitter} alt="" />
              <a
                href="https://www.linkedin.com/company/reliassist"
                target="_blank"
              >
                <img src={linkedin} alt="" className="h-8" />
              </a>
              <a
                href="https://www.facebook.com/share/14dzNYR7Wa/?mibextid=wwXIfr"
                target="_blank"
              >
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/reliassist/" target="_blank">
                <img src={Instagram} alt="" />
              </a>
            </div>
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
