import { ReliassistNew } from "../../../assets/";
import { social4 } from "../../../assets/";
import { social2 } from "../../../assets/";
import { social1 } from "../../../assets/";
import { social3 } from "../../../assets/";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full md:h-[547px]  xl:h[310px] bg-black text-white px-6 md:px-[100px] py-10 md:py-0">
      <div className="w-full md:flex gap-20 py-12  md:h-[145px]  leading-[47px]">
        <div className="md:w-[347px]  mt-2 mb-4">
          <img src={ReliassistNew} alt="" />
          <p className="font-san font-Regular  md:text-[16px] mt-4 mb-6">
            Your Projects delivered with ease
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4  w-full ">
          <div>
            <h3 className="w-full font-san font-bold text-[18px] md:text-[20px]  mb-[10px]">
              Company
            </h3>
            <ul className="space-y-2  font-san font-Regular text-[14px] md:text-[16px] ">
              <Link to="/about">
                <p>About</p>
              </Link>
              {/* <Link to="/service">
              <p>Services</p>
            </Link> */}
              <Link to="/contact">
                <p>Contact us</p>
              </Link>
              <p>Testimonials</p>
              <Link to="/blog">
                <p>Blog</p>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="w-full font-san font-bold text-[18px] md:text-[20px]  mb-[15px]">
              Services
            </h3>
            <ul className="space-y-2  font-san font-Regular text-[14px] md:text-[16px] ">
              <p>Customer Service</p>
              <p>Social Media Management</p>
              <p>Technical Support</p>
              <p>Administrative Support</p>
              <p>Specialize Project Assistance</p>
            </ul>
          </div>

          <div className="md:ml-14">
            <h3 className="w-full font-san font-bold text-[18px] md:text-[20px]  mb-[15px]">
              Pricing
            </h3>
            <ul className="space-y-2  font-san font-Regular text-[14px] md:text-[16px] mb-4">
              <Link to="/pricing">
                <p>Essential</p>
              </Link>
              <Link to="/pricing">
                <p>Boost</p>
              </Link>
              <Link to="/pricing">
                <p>Power</p>
              </Link>
              <Link to="/pricing">
                <p>Flex</p>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="w-full font-san font-bold text-[18px] md:text-[20px]  mb-[15px]">
              Resources
            </h3>
            <ul className="space-y-2  font-san font-Regular text-[14px] md:text-[16px] mb-4">
              <a href="https://reliassist.notion.site/Terms-of-Service-2268eb5fac038198bcebf9075a6a9631?source=copy_link">
                <p>Terms of Service</p>
              </a>
              <a href="https://omotolak.notion.site/Privacy-Policy-2268eb5fac038181a101e9885436dbfb?source=copy_link">
                <p>Privacy Policy</p>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <hr className="md:mt-[20%] mt-[-5%] mb-4" />
      <div className="md:flex items-center justify-between gap-4 ">
        <div>
          <p className="font-san font-Regular text-[14px] md:text-[16px] md:text-start text-center ">
            © 2025. All rights Reserved. This website is owned by Omayo Tech
          </p>
        </div>
        <div className="flex justify-center md:mt-0 mt-4 gap-6">
          <a
            href="https://www.threads.com/@reliassist?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
          >
            <img src={social1} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/reliassist" target="_blank">
            <img src={social2} alt="" />
          </a>

          <a href="https://www.instagram.com/reliassist/" target="_blank">
            <img src={social3} alt="" />
          </a>
          <a href="https://x.com/reliassist?s=11" target="_blank">
            <img src={social4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
