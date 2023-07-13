import { styled } from "@mui/joy";

interface Props {
  line?: boolean;
  floating: boolean;
}

const defaultProps = {
  line: false,
  floating: false,
};

const StyledBarSpace = styled("div")(({ theme }) => ({
  // height: "10px",
  padding: "4px 0",
  "&:hover": {
    backgroundColor: theme.palette.primary.plainHoverBg,
  },
}));

const Line = styled("div")`
  height: 2px;
`;

const BarSpace = ({ line, floating }: Props) => {
  return (
    <StyledBarSpace>
      {line ? (
        <Line
          style={{
            backgroundColor: floating ? "rgba(0,0,0, .15)" : "#000",
          }}
        ></Line>
      ) : null}
    </StyledBarSpace>
  );
};

BarSpace.defaultProps = defaultProps;

export default BarSpace;
