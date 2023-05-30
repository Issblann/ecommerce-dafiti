import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../../hooks/useToggle/useToggle";
import SubCategory from "./SubCategory";
import { sections } from "../../data/sections";

const Types = ({ section, handleFilter, handleHide }) => {

  return (
    <>
      <li onClick={() => handleFilter(section.title)} onMouseLeave={handleHide}   className=" cursor-pointer">
        <p>{section.title}</p>
      </li>
      
    </>
  );
};

export default Types;
