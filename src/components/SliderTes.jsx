import { useRef } from "react";
import arrow_left from "../../src/assets/arrow_left.svg";
import arrow_right from "../../src/assets/arrow_right.svg";

const SliderTes = () => {
  const scrollRef = useRef();
  const scroll = (direction) => {
    const scrollAmount = 150;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behaviour: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: -scrollAmount, behaviour: "smooth" });
    }
  };

  const items = [
    {
      description: `Providing seamless, professional assistance to enhance customer
                satisfaction—handling inquiries, resolving complaints, processing
                orders, and delivering real-time support through live chat.`,
      company: "Ichota Limited",
      param: "Theodora Chiminez",
      title: "CEO, Ichota",
      bgColor: "bg-[#330C49]",
    },
    {
      description: ` Enhancing your online presence with engaging content, strategic
                posting, audience interaction, and performance tracking—while
                delivering visually compelling graphics to elevate your brand.`,
      company: "BeyondTheory",
      param: "Stephanie Aniche",
      title: "Operations Lead",
      bgColor: "bg-[#330C49]",
    },
    {
      description: ` Managing day-to-day administrative tasks can be time-consuming.
                ReliAssist’s administrative support services are designed to handle
                these essential functions, allowing you to focus on growing your
                business without getting bogged down by routine tasks.`,
      company: "Micrographia",
      param: "Obiajulu Anayo",
      title: "CEO & Founder",
      bgColor: "bg-[#330C49]",
    },
  ];

  return (
    <div className="h-[600px] md:h-[700px] bg-[#2A0B3B] py-20 px-4 md:px-[100px] mt-20 md:mt-0">
      <div className="flex md:flex-row flex-col justify-between mt-6 ">
        <div>
          <h1 className="  font-bold text-white text-[28px] md:text-[56px]  mb-[15px]">
            Hear from Our{""}
            <span className="ml-4 text-blue">Happy Clients</span>
          </h1>
        </div>
        <div className="flex mr-10 gap-2 pointer-events-none ">
          <button
            onClick={() => scroll("left")}
            className="pointer-events-auto"
          >
            <img
              src={arrow_left}
              alt=""
              className="w-[30px] h-[30px] md:h-[60px] md:w-[60px]"
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="pointer-events-auto"
          >
            <img
              src={arrow_right}
              alt=""
              className="w-[30px] h-[30px] md:h-[60px] md:w-[60px]"
            />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full  overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div className="flex space-x-4  py-2 min-w-max mt-10 ">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-[500px] h-[400px] shrink-0 text-white px-10 py-20 rounded-[20px] shadow-md ${item.bgColor}`}
            >
              <p className="font-san font-Regular text-white text-[16px] md:text-[18px] md:mb-6 mb-20">
                {item.description}
              </p>
              <h1 className="font-san font-bold text-white  md:text-[18px] text-[#FFCDEF] ">
                {item.company}
              </h1>
              <p className="font-san font-Regular text-white text-[16px] md:text-[18px]">
                {item.param}
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(106,13,173,1)] to-[rgba(245,1,195,1)]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderTes;
