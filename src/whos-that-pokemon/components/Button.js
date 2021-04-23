import React from "react";

const typeClasses = {
  primary:
    "py-2 rounded-md bg-red-500 text-white w-full font-black hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300",
  secondary:
    "py-2 rounded-md font-black w-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100",
};

export default function Button(props) {
  //
  const { handleClick, children, type = typeClasses.secondary } = props;

  return (
    <button className={typeClasses[type]} onClick={handleClick}>
      {children}
    </button>
  );
}
