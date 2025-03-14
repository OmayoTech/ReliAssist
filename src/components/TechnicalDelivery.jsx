import ornament_sup from "../../src/assets/ornament_sup.png";

const TechnicalDelivery = () => {
  return (
    <div className="h-[268px] mt-[8%] bg-[#310252] flex justify-between">
      <div>
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[120px]" />
      </div>
      <div className="py-12">
        <h1 className="text-white font-Rale font-bold text-[16px] md:text-[32px] text-center md:mb-[2px] mb-[15px]">
          Need support for a specific
        </h1>
        <p className="text-white font-bold font-Rale text-[16px] md:text-[32px] text-center">
          project? Let’s make it happen
        </p>
        <div className="flex justify-center mt-[4%]">
          <button className="md:py-3 py-2 md:px-12 px-6 font-bold text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-md">
            Get in Touch!
          </button>
        </div>
      </div>
      <div>
        <img src={ornament_sup} alt="" className="w-[70px] md:w-[120px]" />
      </div>
    </div>
  );
};

export default TechnicalDelivery;
