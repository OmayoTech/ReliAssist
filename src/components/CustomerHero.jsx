import customer_hero from "../../src/assets/customer_hero.png";

const CustomerHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:px-[140px] gap-10 justify-evenly px-4 mt-10 md:mt-20">
      <div className="flex flex-col items-center md:items-start md:w-full py-10 md:py-20 mb-10 md:basis-1/2">
        <h1 className="text-center md:text-start text-[30px] md:text-[48px] leading-[45px] md:leading-[59px] font-Rale font-semibold text-secondary">
          Customer Support That Strengthens Loyalty and Builds Trust
        </h1>

        <p className="text-center md:text-start w-full md:w-[95%] mt-4 font-Rale text-[16px] md:text-[20px] leading-[30px]">
          Your customers deserve exceptional support. ReliAssist provides
          dedicated customer service professionals who handle inquiries, resolve
          issues, and create positive experiences that encourage customer
          loyalty.
        </p>
      </div>
      <div className="flex justify-center md:w-full md:basis-1/2">
        <img
          src={customer_hero}
          alt="hero"
          className="max-w-full h-auto w-[400px] md:w-[1000px] md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default CustomerHero;
