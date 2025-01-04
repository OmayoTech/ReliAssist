import { logo } from "../assets/";

const NavBar = () => {
  return (
    <div className="left-0 right-0 top-0  flex justify-between items-center px-[100px] py-2 ">
      <img src={logo} alt="" className="w-[62px]" />
      <div className="left-0 right-0 top-0  flex justify-end items-center gap-10  py-6 ">
        <div className="flex items-center justify-center gap-10 text-lg  list-none">
          <li to="/about" className="hover:text-primary text-[16px] font-Rale">
            About Us
          </li>
          <li to="/login" className="hover:text-primary text-[16px] font-Rale">
            Services
          </li>
          <li
            to="/sign-up"
            className="hover:text-primary text-[16px] font-Rale"
          >
            Contact us
          </li>
        </div>
        <button className="md:py-3 py-2 md:px-12 px-6 text-white bg-secondary hover:bg-black hover:outline-black text-[16px] font-Rale outline outline-1 outline-primary rounded-md">
          Request Talent
        </button>
      </div>
    </div>
  );
};

export default NavBar;
