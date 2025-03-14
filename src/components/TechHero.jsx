import tech_hero from "../../src/assets/tech_hero.png";

const TechHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:px-[140px] gap-10 justify-evenly px-4 mt-10 md:mt-20">
      <div className="flex flex-col items-center md:items-start md:w-full py-10 md:py-20 mb-10 md:basis-1/2">
        <h1 className="text-center md:text-start text-[30px] md:text-[40px] leading-[45px] md:leading-[59px] font-Rale font-semibold text-secondary">
          Dependable Technical Support for Smooth Operations
        </h1>

        <p className="text-center md:text-start w-full md:w-[95%] mt-4 font-Rale text-[16px] md:text-[20px] leading-[30px]">
          Technical issues can be disruptive. ReliAssist provides knowledgeable
          technical support to handle troubleshooting, software assistance, and
          more, ensuring that your business runs smoothly without interruption.
        </p>
      </div>
      <div className="flex justify-center md:w-full md:basis-1/2">
        <img
          src={tech_hero}
          alt="hero"
          className="max-w-full h-auto w-[400px] md:w-[1000px] md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default TechHero;
