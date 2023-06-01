import { useState } from "react";

const useToggle = (initialState = false) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const toggle = () => {
    setIsToggle(prevValue => !prevValue);
  };

  return { isToggle, toggle, setIsToggle };
};

export default useToggle;
