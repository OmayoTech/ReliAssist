import work1 from "../../src/assets/work1.png";
import work2 from "../../src/assets/work2.png";
import work3 from "../../src/assets/work3.png";
import work4 from "../../src/assets/work4.png";
import work5 from "../../src/assets/work5.png";

const About = () => {
  return (
    <div className="h-[1100px] md:h-[700px] xl:h-[800px]  md:px-[100px] px-4">
      <h1 className=" font-san font-bold text-[28px] md:text-[56px]  mb-[15px]">
        How{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
          ReliAssist works
        </span>
      </h1>
      <p className=" font-Regular font-san text-[14px] md:text-[18px] md:w-[45%] w-full ">
        Effortless support tailored to your business needs—whether it’s customer
        service, technical assistance, social media management, or specialized
        projects, our expert VAs are here to help you stay productive and
        efficient.
      </p>

      <div className="flex-row md:flex md:justify-evenly gap-16 w-full mt-16">
        <div className=" mb-6">
          <img src={work1} alt="" className="mb-4" />
          <p className="font-san font-bold  md:text-[18px] mb-4">
            Consultation
          </p>
          <p className="font-san font-Regular text-[16px] md:text-[18px]">
            We start with a consultation to understand your unique needs and
            goals.
          </p>
        </div>

        <div className=" mb-6 ">
          <img src={work2} alt="" className="mb-4" />
          <p className="font-san font-bold md:text-[18px]  mb-4">VA Matching</p>
          <p className="font-san font-Regular text-[16px] md:text-[18px] ">
            We’ll match you with a virtual assistant whose skills align with
            your requirements..
          </p>
        </div>

        <div className=" mb-6 ">
          <img src={work3} alt="" className="mb-4" />
          <p className="font-san font-bold md:text-[18px]  mb-4">
            Onboarding & Meet your Team
          </p>
          <p className="font-san font-Regular text-[16px] md:text-[18px]">
            Meet your ReliAssist Pro during our onboarding
            <br /> call. Our team will help with tech setup, workflow management
            tools, and more.
          </p>
        </div>
      </div>
      <div className="flex-row md:flex justify-evenly gap-10 md:w-[65%] w-full mt-[4%] ">
        <div className=" mb-6 ">
          <img src={work4} alt="" className="mb-4" />
          <p className="font-san font-bold md:text-[18px]  mb-2">
            Task Management
          </p>
          <p className="font-san font-Regular text-[16px] md:text-[18px]">
            Easily assign and monitor tasks via your personal dashboard, where
            you can communicate directly with your VA.
          </p>
        </div>

        <div className=" mb-6 ">
          <img src={work5} alt="" className="mb-4" />
          <p className="font-san font-bold md:text-[18px]  mb-2">
            Ongoing Support
          </p>
          <p className="font-san font-Regular text-[16px] md:text-[18px]">
            Our support doesn’t stop once you’re set up. We’re here to ensure
            your experience is smooth and successful.
          </p>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default About;
