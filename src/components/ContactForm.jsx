import { useState } from "react";
import Email_icon from "../../src/assets/Email_icon.png";
import Address_icon from "../../src/assets/Address_icon.png";
import form_mask from "../../src/assets/form_mask.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    aboutUs: "",
    reason: "",
    details: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted successfully!"); // Add success alert
    setFormData({
      name: "",
      email: "",
      businessName: "",
      phone: "",
      aboutUs: "",
      reason: "",
      details: "",
      url: "",
    }); // Reset form after submission
  };

  return (
    <div className="h-[1100px] md:h-[680px] flex flex-col md:flex-row md:justify-center w-full md:mb-[4%]  md:px-[160px] md:gap-20">
      <div className="w-full basis-3/5 md:mb-0 mb-[10%]">
        <h1 className="mb-6 px-4 text-[20px] md:text-[36px] font-Rale font-semibold">
          Contact Form
        </h1>
        <form
          className="space-y-4 px-4"
          name="ReliAssistForm"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="ReliAssist" />
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px] "
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="aboutUs"
              value={formData.aboutUs}
              onChange={handleChange}
              placeholder="How did you hear about us?"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Reason for Enquiry"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              required
            />
          </div>
          <div>
            <textarea
              name="details"
              rows="4"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your need"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
              required
            ></textarea>
          </div>
          <div>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Website URL/LinkedIn URL"
              className="w-full border-2 border-#EAEAEA py-2 px-2 font-Rale font-Regular text-[16px]"
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
