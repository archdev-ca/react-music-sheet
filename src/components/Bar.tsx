import { styled } from "@mui/joy";
import BarLine from "./BarLine";
import BarSpace from "./BarSpace";

const StyledBar = styled("div")`
  position: relative;
  width: 25%;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    top: 4px;
    bottom: 54px;
    width: 2px;
    background-color: #000;
  }
`;

const Bar = () => {
  return (
    <StyledBar>
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine isFloating />
      <BarSpace />
      <BarLine isFloating />
      <BarSpace />
    </StyledBar>
  );
};

export default Bar;
