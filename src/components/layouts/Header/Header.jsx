import { useState } from "react";
import { logo, closeIcon, menuIcon } from "../../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="left-0 right-0 top-0  flex justify-between items-center md:px-[100px] md:py-2 px-4 py-6">
      <img src={logo} alt="" className="w-[62px] cursor-pointer" />
      <div className="hidden left-0 right-0 top-0 md:flex justify-end items-center gap-10  py-6 ">
        <div className="flex items-center justify-center gap-10 text-lg  list-none">
          <Link
            to="/about"
            className="hover:text-primary text-[16px] font-Rale cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/service"
            className="hover:text-primary text-[16px] font-Rale cursor-pointer"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="hover:text-primary text-[16px] font-Rale cursor-pointer"
          >
            Contact us
          </Link>
        </div>
        <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
          <button className="md:py-3 py-2 md:px-12 px-6 font-bold text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-md">
            Request Talent
          </button>
        </a>
      </div>
      <div className="block md:hidden">
        <img
          src={toggle ? closeIcon : menuIcon}
          className="md:hidden block h-6 w-6 cursor-pointer"
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } justify-center items-center h-[100vh] bg-black bg-opacity-90 text-white absolute top-20 right-0 -my-2 w-full`}
        >
          <ul className="list-none items-center flex flex-col gap-10 pb-[24px] text-dimWhite">
            <Link
              to="/about"
              className="hover:text-primary text-[16px] font-Rale"
            >
              About Us
            </Link>
            <Link
              to="/service"
              className="hover:text-primary text-[16px] font-Rale"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="hover:text-primary text-[16px] font-Rale"
            >
              Contact us
            </Link>

            <a href="https://zfrmz.com/igfe5iy9VPWbgkjIaJ5P">
              <button className="md:py-3 py-2 md:px-12 px-6 font-bold text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-md">
                Request Talent
              </button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
