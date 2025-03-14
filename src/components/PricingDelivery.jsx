import ornament_sup from "../../src/assets/ornament_sup.png";

const PricingDelivery = () => {
  return (
    <div className="h-[268px] mt-[8%] bg-[#310252] flex justify-between">
      <div>
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[120px]" />
      </div>
      <div className="py-12">
        <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mb-[60px] mb-[50px]">
          Need a custom plan?
        </h1>

        <div className="flex justify-center mt-[4%]">
          <button className="md:py-3 py-2 md:px-12 px-6 font-bold text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-md">
            Let's Discuss!
          </button>
        </div>
      </div>
      <div>
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[120px]" />
      </div>
    </div>
  );
};

export default PricingDelivery;
