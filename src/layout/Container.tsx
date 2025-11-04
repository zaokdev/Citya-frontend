import React from "react";
import type { childrenProps } from "../types";

interface containerProps extends childrenProps {
  customStyles?: string;
}

const Container = ({ children, customStyles }: containerProps) => {
  return (
    <div className={`w-[90%] md:w-[80%] mx-auto ${customStyles}`}>
      {children}
    </div>
  );
};

export default Container;
