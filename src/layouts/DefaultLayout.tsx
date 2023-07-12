import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="container mx-auto pt-4">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
