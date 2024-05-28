import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disable?: boolean;
  className?: string;
};

const Button = ({ disable, className, ...props }: ButtonProps) => {
  return (
    <button
      disabled={disable}
      className={`p-5 border-4 shadow-button 
             ${
               disable
                 ? "bg-gray-200 border-gray-400 text-gray-500 cursor-not-allowed "
                 : "bg-white border-black text-black hover:shadow-button-hover hover:-translate-y-0.5"
             }
             ${className}
             `}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
