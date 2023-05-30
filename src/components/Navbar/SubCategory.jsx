import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useToggle from "../../hooks/useToggle/useToggle";


const SubCategory = ({typess}) => {


console.log(typess);
  return (
    // <ul className="absolute w-full bottom-[-74px] flex gap-20 left-0  bg-slate-400 p-5 ">
    //   {/* {typess.map((subsection) => {
    //     return (
    //       <li key={subsection.id}>
    //         <NavLink to={subsection.path}>{subsection.tittlesubsections}</NavLink>
    //       </li>
    //     );    //   })} */}   
 
    // </ul>
    <div  className="absolute w-full top-44 flex gap-20 left-0  bg-slate-400 p-5 ">
        {typess.map(type => (
            <NavLink to={type.path}>{type.tittlesubsections}</NavLink>
        ))}
    </div>

  );
};

export default SubCategory;
