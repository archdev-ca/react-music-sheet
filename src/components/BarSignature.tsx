import { styled } from "@mui/joy";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import { Clef } from "@/interfaces/common";
import trebleSign from "@/assets/images/treble.png";
import bassSign from "@/assets/images/bass.png";

interface Props {
  clef: Clef;
  className?: "string";
}

const StyledBar = styled("div")<Props>(
  ({ clef }) => `
  position: relative;
  display: flex;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: ${clef === "treble" ? "185px" : "12px"};
    bottom: ${clef === "treble" ? "22px" : "120px"};
    width: 2px;
    background-color: #000;
  }
  &>img {
    position: absolute;
    left: 10px;
    bottom: 15px;
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
          bottom: clef === "treble" ? "15px" : "135px",
        }}
      />
      <BarColumn clef={clef} />
    </StyledBar>
  );
};

export default BarSignature;
