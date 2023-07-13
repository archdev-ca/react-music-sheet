import Bar from "@/components/Bar";
import { styled } from "@mui/joy";
import BarSignature from "./BarSignature";

const StyledClef = styled("div")`
  display: flex;
`;

interface Props {
  clef: Clef;
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
