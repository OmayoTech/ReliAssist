import technical_hero from "../../src/assets/technical_hero.png";

const TechnicalHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:px-[140px] gap-10 justify-evenly px-4 mt-10 md:mt-20">
      <div className="flex flex-col items-center md:items-start md:w-full py-10 md:py-20 mb-10 md:basis-1/2">
        <h1 className="text-center md:text-start text-[30px] md:text-[48px] leading-[45px] md:leading-[59px] font-Rale font-semibold text-secondary">
          Project-Based Assistance Tailored to Your Needs
        </h1>

        <p className="text-center md:text-start w-full md:w-[95%] mt-4 font-Rale text-[16px] md:text-[20px] leading-[30px]">
          Sometimes, you need extra help for a specific project or unique task.
          ReliAssist provides flexible, specialized support for projects large
          and small, whether you need research, planning, or hands-on execution.
        </p>
      </div>
      <div className="flex justify-center md:w-full md:basis-1/2">
        <img
          src={technical_hero}
          alt="hero"
          className="max-w-full h-auto w-[400px] md:w-[1000px] md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default TechnicalHero;
