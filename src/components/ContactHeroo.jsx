import { useState } from "react";
const ContactHeroo = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [business, setBusiness] = useState();
  const [tel, setTel] = useState();
  const [about, setAbout] = useState();
  const [reason, setReason] = useState();
  const [message, setMessage] = useState();
  const [url, setUrl] = useState();

  return (
    <div className=" md:py-0 py-14  md:mt-[8%] ">
      <div className="flex flex-col md:flex-row  md:w-full md:px-[100px] md:gap-1 gap-16 md:justify-center  px-4  ">
        <div className=" md:w-full">
          <h1 className="text-center text-white md:text-start text-[40px] md:text-[72px] leading-[45px] md:leading-[79px]  font-semibold text-secondary">
            We’re here to <span>help</span>
          </h1>
          <p className="text-white md:text-start text-center text-[14px] md:text-[20px] ">
            After signing up, your Account Manager will match you with a
            dedicated assistant who grows with your business. Need more skills?
            Add another assistant for free.
          </p>
          <div className="text-white md:mt-[8%] mt-[15%]">
            <p>Phone Contact</p>
            <p>+234 000 000 000 00</p>
            <br />

            <p>Email Address</p>
            <p>sales@reliassist.co</p>
            <br />

            <p>Address</p>
            <p>Remote</p>
          </div>
        </div>
        <div className=" md:w-full ">
          <div className="w-full basis-3/5  bg-white py-10 md:px-4 px-0 rounded-[15px]">
            <form
              className="space-y-4 px-4"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full border-2 border-#EAEAEA rounded-[10px] py-2 px-2  font-Regular text-[16px]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border-2 border-#EAEAEA  rounded-[10px] py-2 px-2  font-Regular text-[16px] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  placeholder="Business Name"
                  className="w-full  rounded-[10px] border-2 border-#EAEAEA py-2 px-2  font-Regular text-[16px]"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full  rounded-[10px] border-2 border-#EAEAEA py-2 px-2  font-Regular text-[16px]"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="aboutUs"
                  id="aboutUs"
                  placeholder="How did you hear about us?"
                  className="w-full  rounded-[10px] border-2 border-#EAEAEA py-2 px-2  font-Regular text-[16px]"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="reason"
                  id="reason"
                  placeholder="Reason for Enquiry"
                  className="w-full  rounded-[10px] border-2 border-#EAEAEA py-2 px-2  font-Regular text-[16px]"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </div>
              <div>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Tell us about your need"
                  className="w-full  rounded-[10px] border-2 border-#EAEAEA py-2 px-2  font-Regular text-[16px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <input
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Website URL/LinkedIn URL"
                  className="w-full  rounded-[10px] border-2 border-#EAEAEA py-2 px-2  font-Regular text-[16px]"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="md:py-3 py-2 md:px-12 px-6 font-bold text-white bg-secondary hover:bg-black hover:outline-black text-[16px]  outline outline-1 outline-primary rounded-[50px]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroo;
