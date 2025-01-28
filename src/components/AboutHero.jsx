import Hero_about from "../assets/Hero_about.png";

const AboutHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full md:px-[140px] gap-10 justify-evenly px-4 mt-10 md:mt-20">
      <div className="flex flex-col items-center md:items-start md:w-full py-10 md:py-20 mb-10 md:basis-1/2">
        <h1 className="text-center md:text-start text-[40px] md:text-[70px] leading-[45px] md:leading-[69px] font-Rale font-semibold text-secondary">
          About ReliAssist
        </h1>

        <p className="text-center md:text-start w-full md:w-[95%] mt-4 font-Rale text-[16px] md:text-[20px] leading-[30px]">
          ReliAssist was founded with a clear mission: To provide reliable,
          high-quality virtual assistance to businesses that want to optimize
          their time and grow without the stress of extra overhead. We’re
          dedicated to creating value by connecting you with skilled
          professionals who are invested in your success.
        </p>
      </div>
      <div className="flex justify-center md:w-full md:basis-1/2">
        <img
          src={Hero_about}
          alt="hero"
          className="max-w-full h-auto w-[400px] md:w-[1000px] md:h-[500px]"
        />
      </div>
    </div>
  );
};

export default AboutHero;
