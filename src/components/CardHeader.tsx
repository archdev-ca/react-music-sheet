import React from "react";

type Props = {
  children?: React.ReactNode;
};

const CardHeader = ({ children }: Props) => {
  return <div className="p-4 border-b">{children}</div>;
};

export default CardHeader;
