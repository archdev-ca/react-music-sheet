import { styled } from "@mui/joy";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import { ClefType } from "@/interfaces";

interface Props {
  clef: ClefType;
  className?: "string";
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

const Bar = ({ clef }: Props) => {
  const { timeSignature } = useContext(AppContext);
  return (
    <StyledBar clef={clef}>
      <BarColumn clef={clef} />
    </StyledBar>
  );
};

export default Bar;
