import Bar from "@/components/Bar";
import { styled } from "@mui/joy";
import BarSignature from "./BarSignature";
import { Clef as ClefType } from "@/interfaces/common";

const StyledClef = styled("div")`
  display: flex;
`;

interface Props {
  clef: ClefType;
}

const Clef = ({ clef }: Props) => {
  return (
    <StyledClef>
      <BarSignature clef={clef} />
      <Bar clef={clef} />
      <Bar clef={clef} />
      <Bar clef={clef} />
      <Bar clef={clef} />
    </StyledClef>
  );
};

export default Clef;
