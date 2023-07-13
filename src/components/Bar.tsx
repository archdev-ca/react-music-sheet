import { styled } from "@mui/joy";
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
    bottom: 50px;
    width: 2px;
    background-color: #000;
  }
`;

const Bar = () => {
  return (
    <StyledBar>
      <BarSpace line />
      <BarSpace />
      <BarSpace line />
      <BarSpace />
      <BarSpace line />
      <BarSpace />
      <BarSpace line />
      <BarSpace />
      <BarSpace line />
      <BarSpace />
      <BarSpace line floating />
      <BarSpace />
      <BarSpace line floating />
      <BarSpace />
    </StyledBar>
  );
};

export default Bar;
