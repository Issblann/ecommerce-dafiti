import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../../hooks/useToggle/useToggle";
import SubCategory from "./SubCategory";

const Types = ({ section }) => {
  const { isToggle, toggle, setIsToggle } = useToggle();
    const [subtypes, setSubtypes] = useState(section.subsections)

  const handleFilter = type => {
   
    toggle();
    
    setSubtypes(section.subsections)
    console.log(subtypes);
    console.log(isToggle);
  };
 


  return (
    <>
      <li onClick={() => handleFilter(section.title)} className=" cursor-pointer">
        <p>{section.title}</p>
      </li>
      {isToggle && <SubCategory section={subtypes} />}
    </>
  );
};

export default Types;
