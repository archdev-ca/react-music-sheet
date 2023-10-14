import React from "react";
import { styled } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

const Container = styled("div")`
  box-sizing: border-box;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 4px;
  width: 34px;
`;

const BeatContainer = (props: Props) => {
  return <div>BeatContainer</div>;
};

export default BeatContainer;
