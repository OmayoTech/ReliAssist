import { Link } from "react-router-dom";
import service1 from "../../src/assets/service1.svg";
import service2 from "../../src/assets/service2.png";
import service3 from "../../src/assets/service3.png";
import service4 from "../../src/assets/service4.png";
import service5 from "../../src/assets/service5.png";
import service6 from "../../src/assets/service6.png";

const OurService = () => {
  return (
    <div
      id="Services"
      className=" py-14 mb-[8%] h-[1550] md:mt-[8%]  md:px-[100px] px-4 text-center"
    >
      <h1 className="  font-bold text-[28px] md:text-[46px]  mb-[15px] text-center ">
        Our{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          Services
        </span>
      </h1>
      <p className="font-Regular font-Rale text-center text-[14px] md:text-[18px]  w-full md:px-[350px] px-4 ">
        Effortless support tailored to your business needs—whether it’s customer
        service, technical assistance, social media management, or specialized
        projects, our expert VAs are here to help you stay productive and
        efficient.
      </p>
      <a href="https://forms.zohopublic.com/reliassist1/form/LetsMergeYouWithThePerfectVAForYou/formperma/zl7SfYPqi2ajNM1jisikGepE6qym_zjwblIx_WvweM0">
        <button className="py-2 md:py-3 px-6 md:px-12 text-white text-[16px] bg-secondary hover:bg-black hover:outline-black font-bold font-Rale outline outline-1 outline-primary rounded-[50px] mt-8">
          Get Started
        </button>
      </a>
      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-2 grid-rows-3 md:gap-4 p-4  md:mt-20 mt-10 text-start">
          <div
            className={`md:w-[500px] w-[360px] h-[420px] md:h-[500px] overflow-hidden mb-4 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md bg-[#3A0956] `}
          >
            <img src={service1} className="mb-6 md:w-[100px] w-[70px]" />
            <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
              Customer Service Support
            </h1>
            <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
              Providing seamless, professional assistance to enhance customer
              satisfaction—handling inquiries, resolving complaints, processing
              orders, and delivering real-time support through live chat.
            </p>
            <Link to="/customer">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
                Learn More
              </button>
            </Link>
          </div>
          <div
            className={`md:w-[500px] w-[360px] h-[420px] md:h-[500px] overflow-hidden mb-4 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md bg-[#6A0DAD]`}
          >
            <img src={service2} className="mb-6 md:w-[100px] w-[70px]" />
            <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
              Social Media & Content Management
            </h1>

            <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
              Enhancing your online presence with engaging content, strategic
              posting, audience interaction, and performance tracking—while
              delivering visually compelling graphics to elevate your brand.
            </p>
            <Link to="/social">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
                Learn More
              </button>
            </Link>
          </div>
          <div
            className={`md:w-[500px] w-[360px] h-[420px] md:h-[500px] overflow-hidden mb-4 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md bg-[#00929A]`}
          >
            <img src={service3} className="mb-6 md:w-[100px] w-[70px]" />
            <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
              Administrative Support
            </h1>

            <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
              Managing day-to-day administrative tasks can be time-consuming.
              ReliAssist’s administrative support services are designed to
              handle these essential functions, allowing you to focus on growing
              your business without getting bogged down by routine tasks.
            </p>
            <Link to="/admin">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
                Learn More
              </button>
            </Link>
          </div>
          <div
            className={`md:w-[500px] w-[360px] h-[420px] md:h-[500px] overflow-hidden mb-4 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md bg-blue-600`}
          >
            <img src={service4} className="mb-6 md:w-[100px] w-[70px]" />
            <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
              Creative Design
            </h1>

            <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
              We create eye-catching visuals that bring your brand to life and
              boost engagement. From bold banners to sleek social media
              graphics, every design is tailored to capture your voice. Need
              flyers, brochures, or a standout logo? We’ve got it covered—with
              cohesive visual branding that makes your message unforgettable.
            </p>
            <Link to="/creative">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
                Learn More
              </button>
            </Link>
          </div>
          <div
            className={`md:w-[500px] w-[360px] h-[420px] md:h-[500px] overflow-hidden mb-4 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md bg-[#7266FF]`}
          >
            <img src={service5} className="mb-6 md:w-[100px] w-[70px]" />
            <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
              Technical Support
            </h1>

            <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
              We design intuitive UI/UX and responsive websites that blend
              beauty with function. From seamless e-commerce builds to
              performance-optimized sites, we’ve got you covered. Our tailored
              CMS solutions give you full control to manage and scale with ease.
            </p>
            <Link to="/tech">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
                Learn More
              </button>
            </Link>
          </div>
          <div
            className={`md:w-[500px] w-[360px] h-[420px] md:h-[500px] overflow-hidden mb-4 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md bg-[#FF6969]`}
          >
            <img src={service6} className="mb-6 md:w-[100px] w-[70px]" />
            <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
              Specialized Project Assistance
            </h1>

            <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
              Sometimes, you need extra help for a specific project or unique
              task. ReliAssist provides flexible, specialized support for
              projects large and small, whether you need research, planning, or
              hands-on execution.
            </p>
            <Link to="/technical">
              <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
