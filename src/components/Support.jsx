import { aboutReli, why1, why2, why3, why4 } from "../assets";

const Support = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-[1000px] md:h-[700px] md:px-[100px] px-4 gap-[80px]  py-14 mb-[8%] mt-[8%]">
      <div className=" basis-1/2">
        <h1 className="w-full  font-bold text-[28px] md:text-[46px]  mb-[15px] mt-10">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,91,195,1)]">
            Choose ReliAssist
          </span>
        </h1>
        <p className="text-[14px] md:text-[20px] font-Regular ">
          A hassle-free way to get professional, discret and highly skilled
          virtual assistant on your terms with no hidden fees or long-term
          commitments.
        </p>
        <div className="flex items-center gap-4 mt-10 mb-4">
          <img src={why1} className="w-[60px]" alt="" />
          <div>
            <h1 className="w-full  font-bold text-[14px] md:text-[18px]  mb-[4px]">
              Flexible & Scalable
            </h1>
            <p className="text-[12px] md:text-[16px] font-Regular">
              No long-term commitments or forced contract. Scale up and down as
              your needs change.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <img src={why2} className="w-[60px]" alt="" />

          <div>
            <h1 className="w-full  font-bold text-[14px] md:text-[18px]  mb-[4px]">
              Transparent Pricing
            </h1>
            <p className="text-[12px] md:text-[16px] font-Regular">
              No hidden fees or surprise charges. you only pay for the services
              ypu need while enjoying exclusive bonuses on us.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <img src={why3} className="w-[60px]" alt="" />

          <div>
            <h1 className="w-full  font-bold text-[14px] md:text-[18px]  mb-[4px]">
              Professional and District VAs
            </h1>
            <p className="text-[12px] md:text-[16px] font-Regular">
              Our highly trained VAs Prioritize confidentiality, ensuring your
              information stays secure - no leaks, no worries.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <img src={why4} className="w-[60px]" alt="" />

          <div>
            <h1 className="w-full  font-bold text-[14px] md:text-[18px]  mb-[4px]">
              Fast & Seamless onboarding
            </h1>
            <p className="text-[12px] md:text-[16px] font-Regular">
              Get started in just 3 minutes and get matched with the right VA in
              under 12 hours
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 basis-1/2">
        <img src={aboutReli} alt="" className="w-[400px] md:w-full" />
      </div>
    </div>
  );
};

export default Support;
