import { styled } from "@mui/joy";

interface Props {
  isFloating?: boolean;
}

const StyledBarLine = styled("div")`
  height: 2px;
`;

const BarLine = ({ isFloating }: Props) => {
  return (
    <StyledBarLine
      style={{
        backgroundColor: isFloating ? "transparent" : "#000",
      }}
    ></StyledBarLine>
  );
};

export default BarLine;
