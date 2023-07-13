import React from "react";
import Bar from "@/components/Bar";
import { styled } from "@mui/joy";

const StyledClef = styled("div")`
  display: flex;
`;

type Props = {};

const Clef = (props: Props) => {
  return (
    <StyledClef>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </StyledClef>
  );
};

export default Clef;
