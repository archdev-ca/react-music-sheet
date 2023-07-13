import { styled } from "@mui/joy";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import { Clef } from "@/interfaces/common";

interface Props {
  clef: Clef;
  className?: "string";
}

const StyledBar = styled("div")<Props>(
  ({ clef }) => `
  position: relative;
  width: 25%;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    top: ${clef === "treble" ? "185px" : "12px"};
    bottom: ${clef === "treble" ? "22px" : "120px"};
    width: 2px;
    background-color: #000;
  }
`
);

const Bar = ({ clef }: Props) => {
  const {} = useContext(AppContext);

  return (
    <StyledBar clef={clef}>
      <BarColumn clef={clef} />
    </StyledBar>
  );
};

export default Bar;
