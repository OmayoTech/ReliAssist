import slackhero from "../../src/assets/slackhero.svg";
import slackuser from "../../src/assets/slackuser.svg";
import slackThread from "../../src/assets/slackThread.svg";
import slackLinkedIn from "../../src/assets/slackLinkedIn.svg";
import slackInsta from "../../src/assets/slackInsta.svg";
import slackTwitter from "../../src/assets/slackTwitter.svg";

const BlogDetailHero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-full md:px-[140px] px-4 mt-16 md:mt-20  ">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start text-[10px] md:py-3 py-2 md:px-10 px-5  bg-[#F9EDFE] rounded-[50px] md:text-[16px]  font-san font-Regular ">
          Design
        </p>
        <h1 className="text-center text-pretty font-bold  text-[23px] md:text-[74px] leading-[45px] md:leading-[69px] font-san  mt-8">
          Building your
          <span className="ml-4">API Stack</span>
        </h1>
        <div className="flex items-center gap-5 mt-14">
          <img src={slackuser} alt="" />
          <p>Jason francisco</p>
          <p>August 20, 2022</p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <img src={slackThread} alt="" />
          <img src={slackLinkedIn} alt="" />
          <img src={slackInsta} alt="" />
          <img src={slackTwitter} alt="" />
        </div>
        <img
          src={slackhero}
          alt=""
          className="mt-10 rounded-[30px] h-[230px] md:h-full cursor-pointer mt-[6%]"
        />
      </div>
    </div>
  );
};

export default BlogDetailHero;
