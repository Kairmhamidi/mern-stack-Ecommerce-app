import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { SearchIcon} from 'lucide-react'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="flex justify-between items-center md:px-10 py-5  shadow-md px-4  w-full bg-white">
      <div className="logo">
        <Link to={"/"}>
          <img src="/logo.svg" className="border-none outline-none " />
        </Link>
      </div>
      <div className="hidden w-full md:flex justify-between items-center max-w-sm  focus-within:shadow-sm  pr-3 border rounded-full">
        <input
          dir="rtl"
          type="text"
          placeholder="جستجوی محصولات"
          className="w-full outline-none"
        />
        <div className="text-lg min-w-[50px] h-8 bg-blue-500 flex justify-center items-center rounded-l-full">
          <SearchIcon className=" text-white " />
        </div>
      </div>
      <div className="link flex gap-3">
        <div className="div">
          <FaRegUser size={24} className="cursor-pointer" />
        </div>
        <div>
          <IoMdCart size={24} className="cursor-pointer relative" />
          <span className="absolute w-3 h-3 bg-blue-500 rounded-full top-4.5 -mx-2 text-sm text-white inline-flex justify-center items-center p-1">
            1
          </span>
        </div>
        <div className="w-fit text-gray-100 bg-blue-500 rounded-full px-2 p-1 text-sm ">
          <Link to={'/login'}>
            <button className="cursor-pointer ">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header
