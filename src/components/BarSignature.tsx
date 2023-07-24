import { styled } from "@mui/joy";
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
    top: 5px;
    bottom: 5px;
    width: 2px;
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
  return (
    <StyledBar clef={clef}>
      <img
        src={clef === "treble" ? trebleSign : bassSign}
        alt=""
        style={{
          bottom: clef === "treble" ? "-2px" : "18px",
        }}
      />
      <BarColumn passive clef={clef} />
    </StyledBar>
  );
};

export default BarSignature;
