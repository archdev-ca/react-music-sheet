import { styled } from "@mui/joy";

interface Props {
  line?: boolean;
  floating?: boolean;
  passive?: boolean;
}

const defaultProps = {
  line: false,
  floating: false,
  passive: false,
};

const StyledBarSpace = styled("div")<Props>(({ theme, passive }) => ({
  // height: "10px",
  padding: "4px 0",
  "&:hover": {
    backgroundColor: passive ? "inherit" : theme.palette.primary.plainHoverBg,
  },
  "&:hover > div": {
    backgroundColor: passive ? "inherit" : "#000 !important",
  },
}));

const Line = styled("div")`
  height: 2px;
`;

const BarSpace = ({ line, floating, passive }: Props) => {
  return (
    <StyledBarSpace passive={passive}>
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
