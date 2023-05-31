import React from "react";

const Types = ({ section, handleFilter }) => {
  return (
    <>
      <li onClick={() => handleFilter(section.title)} className="cursor-pointer">
        <p>{section.title}</p>
      </li>
    </>
  );
};

export default Types;
