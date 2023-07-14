import { styled } from "@mui/joy";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import trebleSign from "@/assets/images/treble.png";
import bassSign from "@/assets/images/bass.png";
import { ClefType } from "@/interfaces";

interface Props {
  clef: ClefType;
  className?: "string";
}

const StyledBar = styled("div")<Props>(
  ({ clef }) => `
  position: relative;
  display: flex;
  min-width: 120px;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: ${clef === "treble" ? "175px" : "12px"};
    bottom: ${clef === "treble" ? "22px" : "115px"};
    width: 4px;
    background-color: #000;
  }
  &>img {
    position: absolute;
    left: 10px;
    bottom: 15px;
    z-index: 2;
  }
`
);

const BarSignature = ({ clef }: Props) => {
  const { timeSignature } = useContext(AppContext);
  return (
    <StyledBar clef={clef}>
      <img
        src={clef === "treble" ? trebleSign : bassSign}
        alt=""
        style={{
          bottom: clef === "treble" ? "15px" : "127px",
        }}
      />
      <BarColumn passive clef={clef} />
    </StyledBar>
  );
};

export default BarSignature;
