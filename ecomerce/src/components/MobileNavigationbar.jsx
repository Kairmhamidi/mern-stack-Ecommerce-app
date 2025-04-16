import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline, IoCameraOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

function MobileNavigationbar() {
  const [active, setActive] = useState(0);
  const menu = [
    {
      name: "Home",
      icon: AiOutlineHome,
      dis: "-translate-x-4",
    },
    {
      name: "Profile",
      icon: IoPersonOutline,
      dis: "-translate-x-26",
    },
    {
      name: "Message",
      icon: FiMessageSquare,
      dis: "-translate-x-48",
    },
    {
      name: "Photo",
      icon: IoCameraOutline,
      dis: "-translate-x-70",
    },
    {
      name: "Settings",
      icon: MdOutlineSettings,
      dis: "-translate-x-92",
    },
  ];

  return (
    <div className="md:hidden bg-blue-500 max-h-[4.4rem] flex justify-center items-center w-fit rounded-tr-md rounded-tl-md ">
      <ul className="flex relative">
        <span
          className={`absolute h-14 w-14 bg-rose-500 duration-500 ${menu[active].dis} border-4 border-gray-900 -top-5 rounded-full shadow-lg`}
        >
          <span className="m1 absolute w-3.5 h-3.5 bg-transparent top-4 -left-[18px] rounded-tr-[11px] shadow-lg"></span>
          <span className="m2 absolute w-3.5 h-3.5 bg-transparent top-4 -right-[18px] rounded-tl-[11px] shadow-lg"></span>
        </span>
        {menu.map((menu, index) => (
          <li key={index} className="w-22">
            <a
              className="flex flex-col text-center pt-6 items-center"
              onClick={() => setActive(index)}
            >
              <span
                className={`text-xl cursor-pointer duration-500  z-10  ${
                  index === active && "-mt-6 text-white"
                }`}
              >
                <menu.icon size={24} />
              </span>
              <span
                className={`${
                  active === index
                    ? "translate-y-4 opacity-100 duration-700"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavigationbar;
