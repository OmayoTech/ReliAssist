import Slider from "./Slider";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="Services" className=" py-10  md:px-[100px] px-4 ">
      <h1 className="  font-bold text-[28px] md:text-[46px]  mb-[15px]  ">
        Our{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Services
        </span>
      </h1>
      <p className="font-Regular font-Rale text-[14px] md:text-[18px] md:w-[45%] w-full ">
        Effortless support tailored to your business needs—whether it’s customer
        service, technical assistance, social media management, or specialized
        projects, our expert VAs are here to help you stay productive and
        efficient.
      </p>
      <Link to="./service">
        <button className="py-2 md:py-3 px-6 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-Rale outline outline-1 outline-primary rounded-[50px] mt-8">
          Get Started
        </button>
      </Link>
      <Slider />
    </div>
  );
};

export default Services;
