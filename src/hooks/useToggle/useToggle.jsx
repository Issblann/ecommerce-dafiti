import { useState } from "react";

const useToggle = (initialState = false) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return { isToggle, toggle };
};

export default useToggle;
