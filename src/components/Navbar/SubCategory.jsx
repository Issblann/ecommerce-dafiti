import React from "react";
import { NavLink } from "react-router-dom";

const SubCategory = ({ typess, toggleSubCategory }) => {
  return (
    <div className="absolute max-w-[1500px] flex md:flex-row flex-col gap-24 md:gap-20  w-full md:top-44 top-[206px] left-0 md:left-auto bg-white p-8 md:p-5 ">
      {typess.map(type => (
        <NavLink key={type.id} onClick={() => toggleSubCategory(false)} to={type.path}>
          {type.tittlesubsections}
        </NavLink>
      ))}
    </div>
  );
};

export default SubCategory;
