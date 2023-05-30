import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const SubCategory = ({section}) => {
  


  return (
    <ul className="absolute w-full bottom-[-74px] flex gap-20 left-0  bg-slate-400 p-5 ">
      {section.map((subsection) => {
        return (
          <li key={subsection.id}>
            <NavLink to={subsection.path}>{subsection.tittlesubsections}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SubCategory;
