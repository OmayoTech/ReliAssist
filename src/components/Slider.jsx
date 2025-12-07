import service1 from "../../src/assets/service1.svg";
import service2 from "../../src/assets/service2.png";
import service3 from "../../src/assets/service3.png";
import service4 from "../../src/assets/service4.png";
import service5 from "../../src/assets/service5.png";
import service6 from "../../src/assets/service6.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Slider = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex items-center h-screen cards-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className={`md:w-[500px] w-[360px] h-[430px] md:h-[500px] overflow-hidden mb-10 md:mb-0  text-white px-4 md:px-10 py-10 md:py-20 rounded-[20px] shadow-md ${card.bgColor}`}
    >
      {/* <div
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div> */}

      <img src={card.image} className="mb-6 md:w-[100px] w-[70px]" />
      <h1 className="font-san font-Medium text-white text-[20px] md:text-[24px] mb-4">
        {card.title}
      </h1>

      <p className="font-san font-Regular text-white text-[13px] md:text-[15px] mb-6">
        {card.description}
      </p>

      <button className="md:py-3 py-2 md:px-12 px-6 text-white border-white  hover:text-white hover:bg-black hover:outline-white text-[16px] font-Regular font-san outline outline-1 outline-white rounded-[50px]">
        {card.buttonText}
      </button>
    </div>
  );
};

export default Slider;

const cards = [
  {
    image: service1,
    title: " Customer Service Support",
    description: `Providing seamless, professional assistance to enhance customer
          satisfaction—handling inquiries, resolving complaints, processing
          orders, and delivering real-time support through live chat.`,
    buttonText: "Learn More",
    bgColor: "bg-[#3A0956]",
  },
  {
    image: service2,
    title: " Social Media & Content Management",
    description: ` Enhancing your online presence with engaging content, strategic
          posting, audience interaction, and performance tracking—while
          delivering visually compelling graphics to elevate your brand.`,
    buttonText: "Learn More",
    bgColor: "bg-[#6A0DAD]",
  },
  {
    image: service3,
    title: "  Administrative Support",
    description: ` Managing day-to-day administrative tasks can be time-consuming.
          ReliAssist’s administrative support services are designed to handle
          these essential functions, allowing you to focus on growing your
          business without getting bogged down by routine tasks.`,
    buttonText: "Learn More",
    bgColor: "bg-[#00929A]",
  },
  {
    image: service4,
    title: "Creative Design",
    description: ` We create eye-catching visuals that bring your brand to life and boost engagement. From bold banners to sleek social media graphics, every design is tailored to capture your voice. Need flyers, brochures, or a standout logo? We’ve got it covered—with cohesive visual branding that makes your message unforgettable.`,
    buttonText: "Learn More",
    bgColor: "bg-blue-600",
  },
  {
    image: service5,
    title: " Technical Support",
    description: ` We design intuitive UI/UX and responsive websites that blend beauty with function. From seamless e-commerce builds to performance-optimized sites, we’ve got you covered. Our tailored CMS solutions give you full control to manage and scale with ease.`,
    buttonText: "Learn More",
    bgColor: "bg-[#7266FF]",
  },
  {
    image: service6,
    title: "Specialized Project Assistance",
    description: ` Sometimes, you need extra help for a specific project or unique task. ReliAssist provides flexible, specialized support for projects large and small, whether you need research, planning, or hands-on execution.
`,
    buttonText: "Learn More",
    bgColor: "bg-[#FF6969]",
  },
];
