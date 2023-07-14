import Bar from "@/components/Bar";
import { styled } from "@mui/joy";
import BarSignature from "./BarSignature";
import { ClefData, ClefType } from "@/interfaces";

const StyledClef = styled("div")`
  display: flex;
`;

interface Props {
  data: ClefData;
  clef: ClefType;
}

const Clef = ({ clef, data }: Props) => {
  console.log({ data });
  const { bars } = data;
  return (
    <StyledClef>
      <BarSignature clef={clef} />
      {bars.map((bar, i) => {
        return <Bar data={bar} key={i} clef={clef} />;
      })}
    </StyledClef>
  );
};

export default Clef;
