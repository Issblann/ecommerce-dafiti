import React, { useState } from "react";
import {  BiSearch } from "react-icons/bi";
import useToggle from "../../hooks/useToggle/useToggle";
import Types from "./Types";
import { sections } from "../../data/sections";
import SubCategory from "./SubCategory";
import Navbar1 from "./Navbar1";
const Navbar = () => {

  const {
    isToggle,
    toggle,
    setIsToggle
  } = useToggle(false);
  const [typess, setTypess] = useState([]);

  const handleFilter = type => {
    const sec = sections.filter(section => section.title === type);
    setTypess(sec[0].subsections);
    toggle();
  };

  return (
    <header className="w-full z-10   h-[200px] flex flex-col items-center py-[10px] ">
      <div className="w-full max-w-7xl flex  justify-end h-[60%] p-3">
      <Navbar1/>
      </div>
      <nav className="w-full max-w-[1500px] p-5 flex md:justify-between relative gap-2 items-center flex-wrap md:flex-nowrap ">
        <ul className="flex gap-3 md:gap-11 ">
          {sections.map(section => {
            return (
              <div key={section.id}>
                <Types section={section} handleFilter={handleFilter} />
              </div>
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
      {isToggle && <SubCategory typess={typess} toggleSubCategory={setIsToggle} />}
    </header>
  );
};

export default Navbar;
