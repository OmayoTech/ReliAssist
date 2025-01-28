const ContactHeroo = () => {
  return (
    <div className=" md:py-0 py-14 md:mb-[4%] mb-[2%] md:mt-[2%]  ">
      <div className="flex flex-col md:flex-row md:w-full md:items-center md:px-[160px] md:gap-1 md:justify-center  px-4  ">
        <div className="flex flex-col items-center md:items-start  md:w-full py-10 md:py-20  md:basis-1/2">
          <h1 className="text-center md:text-start text-[40px] md:text-[72px] leading-[45px] md:leading-[79px] font-Rale font-semibold text-secondary">
            We’re here
            <br /> to help!
          </h1>
        </div>
        <div className="flex justify-center md:w-full md:basis-4/5 ">
          <p className="md:text-start text-center text-[14px] md:text-[20px] font-Rale">
            After you’ve signed up, your Account Manager will introduce
            themselves and begin matching you with the right assistant.
            <br /> You’ll work consistently with the same assistant, allowing
            them to develop a deep understanding of your business. If you need
            additional skills at any point, you can add another assistant to
            your team at no extra cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroo;
