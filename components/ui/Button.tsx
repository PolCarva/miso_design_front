import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="bg-transparent text-black ease-in-out 
      duration-300 px-4 py-2 w-full mt-5 rounded border border-black  hover:bg-black
hover:text-white"
    >
      {text}
    </button>
  );
};

export default Button;
