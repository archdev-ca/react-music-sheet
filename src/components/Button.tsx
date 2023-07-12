import React from "react";

type Props = {
  children?: React.ReactNode;
  color: "primary" | "secondary";
  onClick?: () => {};
};

const defaultProps = {
  color: "primary",
};

const Button = ({ onClick, color = "primary", children }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-600 border-0 text-white transition-all px-4 py-2 rounded-sm flex items-center`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
