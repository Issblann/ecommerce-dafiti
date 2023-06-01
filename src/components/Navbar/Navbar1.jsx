import React from "react";
import useToggle from "../../hooks/useToggle/useToggle";
import { Link } from "react-router-dom";
import Logo from "../../assets/Navbar/LOGO.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import iconCart from "../../assets/Navbar/icon-cart.svg";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
const Navbar1 = () => {
  const { isToggle, toggle } = useToggle();

  return (
    <div className="w-full md:w-[60%] flex justify-between items-center">
      <img width="40%" className="p-3" height="83px" src={Logo} alt="Logo" />
      <div className="absolute right-1 px-3  cursor-pointer md:hidden z-50">
        {isToggle ? (
          <HiOutlineX fontSize="35px" onClick={toggle} />
        ) : (
          <HiOutlineMenu fontSize="35px" onClick={toggle} />
        )}
      </div>
      <div className="flex gap-7 ">
        <ul
          className={`md:flex md:flex-row md:items-center z-30 md:bg-transparent bg-slate-400 h-screen md:h-auto absolute md:static gap-10 flex items-center justify-center  py-4  text-textsmall flex-col font-SourceSansPr  md:mt-0 w-full md:w-auto right-0 transition-all duration-400 ease-in-out ${
            isToggle ? "left-0 top-[0]" : "right-full top-[60px]"
          } `}>
          <li>
            <Link className="flex gap-2 justify-center items-center w-full">
              <HiOutlineUserCircle fontSize="32px" />
              <span className="md:hidden">Cuenta</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 w-full">
              <BiHeart fontSize="32px" />
              <span className="md:hidden">Favoritos</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 w-full ">
              <img src={iconCart} alt="iconCart" />
              <span className="md:hidden">Carrito</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
