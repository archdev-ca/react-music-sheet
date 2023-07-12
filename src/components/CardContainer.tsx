import React from "react";

type Props = {
  children?: React.ReactNode;
};

const CardContainer = ({ children }: Props) => {
  return <div className="p-4">{children}</div>;
};

export default CardContainer;
