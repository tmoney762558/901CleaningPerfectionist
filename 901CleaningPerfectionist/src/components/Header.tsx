import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import headerImage from "../assets/headerImage.jpg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header
      id="home"
      className="flex flex-col items-center w-full h-fit min-h-screen md:p-5 p-2 bg-red-400"
    >
      <nav className="flex justify-between items-center w-full max-w-[75rem] py-3 h-fit">
        <h2 className="flex-1 text-2xl text-white font-bold story-script-regular">
          901 Cleaning Perfectionist
        </h2>
        {/* We can highlight whichever link has been selected or even highlight them based on scroll position */}
        <ul className="flex-1 lg:flex hidden justify-center items-center gap-4">
          <a
            className="text-lg text-white font-bold cursor-pointer"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-lg text-white font-bold cursor-pointer"
            href="#about"
          >
            About
          </a>
          <a
            className="text-lg text-white font-bold cursor-pointer"
            href="#contact"
          >
            Contact
          </a>
        </ul>
        <div className="relative">
          <CiMenuBurger
            className="lg:hidden block cursor-pointer"
            fontSize={"2rem"}
            fill="white"
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
          ></CiMenuBurger>
          {dropdownOpen ? (
            <ul className="flex flex-col items-center absolute top-10 right-0">
              <a
                className="w-[7.5rem] py-3 bg-white rounded-t-sm text-center text-lg text-red-400 font-semibold cursor-pointer"
                href="#home"
                onClick={() => {
                  setDropdownOpen(false);
                }}
              >
                Home
              </a>
              <a
                className="w-[7.5rem] py-3 bg-white text-center text-lg text-red-400 font-semibold cursor-pointer"
                href="#about"
                onClick={() => {
                  setDropdownOpen(false);
                }}
              >
                About
              </a>
              <a
                className="w-[7.5rem] py-3 bg-white rounded-b-sm text-center text-lg text-red-400 font-semibold cursor-pointer"
                href="#contact"
                onClick={() => {
                  setDropdownOpen(false);
                }}
              >
                Contact
              </a>
            </ul>
          ) : null}
        </div>
        <div className="flex-1 lg:flex hidden justify-end">
          <a className=" py-2 px-6 bg-white rounded-sm text-lg text-red-400 font-bold cursor-pointer">
            Get a Quote
          </a>
        </div>
      </nav>
      <div className="flex-1 flex lg:flex-row flex-col justify-center items-center lg:gap-[5rem] gap-[3rem] w-full max-w-[75rem] lg:mt-0 mt-5">
        <div className="lg:flex-1 flex flex-col lg:items-start items-center">
          <h1 className="lg:text-left text-center xl:text-[3.5rem] text-[3rem] text-white font-bold tracking-tight">
            The Most Reliable Cleaning Services in Memphis.
          </h1>
          <p className="lg:text-left text-center lg:text-xl text-lg font-semibold text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptatem, harum dicta facilis, quaerat ducimus ullam explicabo
            error reiciendis, molestiae voluptate.
          </p>
          <button className="mt-[2rem] py-2 px-6 bg-white rounded-md text-lg text-red-400 font-bold">
            <p>Learn More</p>
          </button>
        </div>
        <img
          className="lg:flex-1 lg:w-1/2 w-full max-w-[50rem] aspect-square object-cover rounded-md"
          src={headerImage}
        ></img>
      </div>
    </header>
  );
};

export default Header;
