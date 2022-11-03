import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function NavBar() {
  const [nav, setNav] = useState(true);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-primaryWhite");
  const [outline, setOutline] = useState("border-primaryWhite");
  const [fill, setFill] = useState("fill-primaryWhite");
  const [menu, setMenu] = useState("/assets/mobile-menu.svg");

  useEffect(() => {
    const changeColor = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 40) {
        setBgColor("bg-primaryWhite");
        setTextColor("text-black");
        setOutline("border-primaryPink");
        setFill("fill-primaryPink");
        setMenu("/assets/mobile-menu.svg");
      } else {
        setBgColor("bg-transparent");
        setTextColor("text-primaryWhite");
        setOutline("border-primaryWhite");
        setFill("fill-primaryWhite");
        setMenu("/assets/whiteMenu.svg");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const clickHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="container mx-auto w-full">
      <div
        className={`fixed -top-2 left-0 z-50 h-24 w-full px-4 lg:px-16 py-6 ${textColor} ${bgColor} transition-colors duration-300 ease-in-out`}
      >
        <div className="flex justify-between w-full container mx-auto ">
          <div>
            <h1 className="text-2xl  font-medium mt-4">CINNAMON</h1>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-medium ">
            <ul className="flex items-center gap-8 font-mont-semibold">
              <li className="hover:text-primaryPink duration-300 ease-in-out flex flex-col items-center gap-2 p group mt-4 ">
                <Link href="/">Projects</Link>
                <span className="group-hover:bg-primaryPink bg-transparent w-2 h-2 rounded-full "/>
              </li>
              <li className="hover:text-primaryPink duration-300 ease-in-out flex flex-col items-center gap-2 p group mt-4 ">
                <Link href="/">Services</Link>
                <span className="group-hover:bg-primaryPink bg-transparent w-2 h-2 rounded-full "/>
              </li>
              <li className="hover:text-primaryPink duration-300 ease-in-out flex flex-col items-center gap-2 p group mt-4 ">
                <Link href="/">About Us</Link>
                <span className="group-hover:bg-primaryPink bg-transparent w-2 h-2 rounded-full "/>
              </li>
              <li className="hover:text-primaryPink duration-300 ease-in-out flex flex-col items-center gap-2 p group mt-4 ">
                <Link href="/">Careers</Link>
                <span className="group-hover:bg-primaryPink bg-transparent w-2 h-2 rounded-full "/>
              </li>
              <li className="hover:text-primaryPink duration-300 ease-in-out flex flex-col items-center gap-2 p group mt-4 ">
                <Link href="/">Blog</Link>
                <span className="group-hover:bg-primaryPink bg-transparent  w-2 h-2 rounded-full "/>
              </li>
            </ul>
            <div className="flex items-center gap-8">
              <div
                className={` border-2 ${outline} rounded-full hover:bg-primaryPink duration-300 ease-in-out`}
              >
                <BsPlayFill
                  className={`${fill} z-50 hover:fill-white duration-300 ease-in-out`}
                  size={35}
                />
              </div>
              <Button>Contact Us</Button>
            </div>
          </div>
          <button onClick={clickHandler} className="block lg:hidden">
            <Image src={menu} width={35} height={35} alt="menu button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
