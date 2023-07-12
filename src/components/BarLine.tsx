import { styled } from "@mui/joy";

interface Props {
  isFloating?: boolean;
}

const StyledBarLine = styled("div")(({ theme }) => {
  return {
    padding: "4px 0",
    "&:hover > div": {
      backgroundColor: `${theme.palette.primary.plainHoverBg} !important`,
    },
  };
});

const Line = styled("div")`
  height: 2px;
`;

const BarLine = ({ isFloating }: Props) => {
  return (
    <StyledBarLine>
      <Line
        style={{
          backgroundColor: isFloating ? "transparent" : "#000",
        }}
      ></Line>
    </StyledBarLine>
  );
};

export default BarLine;
