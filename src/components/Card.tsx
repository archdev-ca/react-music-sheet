import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className="bg-white shadow rounded">{children}</div>;
};

export default Card;
