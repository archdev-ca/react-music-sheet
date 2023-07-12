import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Stack = ({ children }: Props) => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export default Stack;
