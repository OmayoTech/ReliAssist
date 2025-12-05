import { useState } from "react";
import Email_icon from "../../src/assets/Email_icon.png";
import Address_icon from "../../src/assets/Address_icon.png";
import form_mask from "../../src/assets/form_mask.png";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [business, setBusiness] = useState();
  const [tel, setTel] = useState();
  const [about, setAbout] = useState();
  const [reason, setReason] = useState();
  const [message, setMessage] = useState();
  const [url, setUrl] = useState();

  return (
    <div className="h-[1100px] md:h-[680px] flex flex-col md:flex-row md:justify-center w-full md:mb-[4%]  md:px-[160px] md:gap-20">
      <div className="w-full basis-3/5 md:mb-0 mb-[10%]">
        <h1 className="mb-6 px-4 text-[20px] md:text-[36px] font-Rale font-semibold">
          Contact Form
        </h1>
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px] "
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="md:py-3 py-2 md:px-12 px-6 font-bold text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-md"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
        <div className="absolute right-0 md:mt-[-4%] mt-[85%]">
          <img src={form_mask} alt="" />
        </div>
      </div>
      <div className="w-full basis-1/2 px-4 ">
        <h1 className="text-[20px] md:text-[36px] font-Rale font-semibold">
          Connect with us
        </h1>
        <div className="md:h-[100px] flex gap-2 mt-6 md:px-[20px] items-center bg-[#FBFBFB]">
          <div>
            <img src={Email_icon} alt="" />
          </div>
          <div>
            <p className="font-Rale font-Regular text-[14px] md:text-[16px] ">
              Email Now
            </p>
            <p className="font-Rale font-Light text-[12px] md:text-[14px] ">
              hello@reliassist.co
            </p>
          </div>
        </div>
        <div className="md:h-[100px] flex gap-2 mt-6 md:px-[20px] items-center bg-[#FBFBFB]">
          <div>
            <img src={Address_icon} alt="" />
          </div>
          <div>
            <p className="font-Rale font-Regular text-[14px] md:text-[16px] ">
              Address
            </p>
            <p className="font-Rale font-Light text-[12px] md:text-[14px] ">
              Remote
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
