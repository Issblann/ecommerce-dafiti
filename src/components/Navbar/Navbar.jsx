import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Navbar/LOGO.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiHeart, BiSearch } from "react-icons/bi";
import iconCart from "../../assets/Navbar/icon-cart.svg";
import useToggle from "../../hooks/useToggle/useToggle";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  const { isToggle, toggle } = useToggle(false);
  const sections = [
    {
      id: 1,
      title: "HOMBRE",
      path: "/Hombre",
      subsections: [
        { tittlesubsections: "CALZADO", path: "/Calzado" },
        { tittlesubsections: "INDUMENTARIA", path: "/Indumentaria" },
        { tittlesubsections: "ACCESORIOS", path: "/Accesorios" }
      ]
    },
    {
      id: 2,
      title: "MUJER",
      path: "/Mujer",
      subsections: [
        { tittlesubsections: "CALZADO", path: "/Calzado" },
        { tittlesubsections: "INDUMENTARIA", path: "/Indumentaria" },
        { tittlesubsections: "ACCESORIOS", path: "/Accesorios" }
      ]
    },
    {
      id: 3,
      title: "NIÑOS",
      path: "/Ninos",
      subsections: [
        { tittlesubsections: "CALZADO", path: "/Calzado" },
        { tittlesubsections: "INDUMENTARIA", path: "/Indumentaria" },
        { tittlesubsections: "ACCESORIOS", path: "/Accesorios" }
      ]
    }
  ];
  return (
    <header className="w-full z-10  bg-slate-600 h-[200px] flex flex-col items-center py-[10px] ">
      <div className="w-full max-w-7xl flex  justify-end h-[60%] p-3">
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
              className={`md:flex md:flex-row md:items-center z-30 md:bg-slate-600 bg-slate-400 h-screen md:h-auto absolute md:static gap-10 flex items-center justify-center  py-4  text-textsmall flex-col font-SourceSansPr  md:mt-0 w-full md:w-auto right-0 transition-all duration-400 ease-in-out ${
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
      </div>
      <nav className="w-full max-w-7xl flex justify-between relative gap-2 items-center h-[40%] p-3">
        <ul className="flex gap-3 md:gap-11 ">
          {sections.map(section => {
            return (
              <>
                <li key={section.id}>
                  <NavLink to={section.path}>{section.title}</NavLink>
                </li>

                {/* <ul className="absolute w-full bottom-[-74px] flex gap-20 left-0  bg-slate-400 p-5 ">
                  {section.subsections.map(subsection => {
                    return (
                      <>
                        <li key={subsection.title}>
                          <NavLink to={section.path + subsection.path}>{subsection.title}</NavLink>
                        </li>
                      </>
                    );
                  })}
                </ul> */}
              </>
            );
          })}
        </ul>

        <div className=" bg-white  border-black border-[1.5px] p-1  rounded ">
          <form className="flex w-full justify-between">
            <input
              className=" w-full bg-transparent outline-none text-black placeholder-black "
              type="text"
              placeholder="Buscar"
            />
            <button type="submit">
              <BiSearch />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
