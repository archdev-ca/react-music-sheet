import { styled } from "@mui/joy";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import { BarData, ClefType } from "@/interfaces";

interface Props {
  clef: ClefType;
  className?: "string";
  data: BarData;
  staffID: number;
  barID: number;
}

const StyledBar = styled("div")<Props>(
  ({ clef }) => `
  position: relative;
  width: 25%;
  display: flex;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    top: ${clef === "treble" ? "175px" : "12px"};
    bottom: ${clef === "treble" ? "22px" : "115px"};
    width: 1px;
    background-color: #000;
  }
`
);

const Bar = ({ clef, data, staffID, barID }: Props) => {
  const { timeSignature } = useContext(AppContext);
  return (
    <StyledBar barID={barID} staffID={staffID} data={data} clef={clef}>
      <BarColumn
        barID={barID}
        staffID={staffID}
        data={data.beats}
        clef={clef}
      />
    </StyledBar>
  );
};

export default Bar;
