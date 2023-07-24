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
  staffID: number;
  style?: React.CSSProperties;
}

const Clef = ({ clef, data, style, staffID }: Props) => {
  const { bars } = data;
  return (
    <StyledClef style={style}>
      <BarSignature clef={clef} />
      {bars && bars.length
        ? bars.map((bar, i) => {
            return (
              <Bar staffID={staffID} barID={i} data={bar} key={i} clef={clef} />
            );
          })
        : null}
    </StyledClef>
  );
};

export default Clef;
