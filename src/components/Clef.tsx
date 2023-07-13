import React from "react";
import Bar from "@/components/Bar";
import { styled } from "@mui/joy";

const StyledClef = styled("div")`
  display: flex;
`;

interface Props {
  clef: Clef;
}

const Clef = ({ clef, className }: Props) => {
  return (
    <StyledClef>
      <Bar clef={clef} />
      <Bar clef={clef} />
      <Bar clef={clef} />
      <Bar clef={clef} />
    </StyledClef>
  );
};

export default Clef;
