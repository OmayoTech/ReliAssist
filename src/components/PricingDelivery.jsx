import grow from "../../src/assets/grow.png";
import { Link } from "react-router-dom";

const PricingDelivery = () => {
  return (
    <div className="h-[600px] md:h-[450px]  py-20 md:px-[150px] px-4 bg-[#2A0B3B]">
      <div className="md:flex items-center bg-[#7B2AE5] md:px-[120px] p-6 rounded-t-lg md:h-[300px] h-[482px]  ">
        <div className="flex-row md:flex items-center">
          <div className="md:w-[50%]  mb-10">
            <h1 className="font-san font-bold text-white text-[25px] md:text-[32px]">
              Do you need a custom plan?
            </h1>
            <p className="font-Regular font-san text-white text-[16px] md:text-[18px] mb-6">
              We understand the uniqueness of your business. Pay only for what
              you need, maximizing value, enhancing flexibility, and supporting
              growth
            </p>

            <Link to="/contact">
              <button className="md:py-3 py-2 md:px-12 px-8 text-black bg-white hover:text-white hover:hover:bg-[#6A0DAD] hover:outline-black text-[16px] font-bold font-san  rounded-[50px]">
                Let's Discuss
              </button>
            </Link>
          </div>
          <div className="md:w-[50%] ">
            <img src={grow} alt="" className="md:h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDelivery;
