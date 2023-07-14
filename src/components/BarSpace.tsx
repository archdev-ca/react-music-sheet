import { BeatData } from "@/interfaces";
import { styled } from "@mui/joy";
import Beat from "@/components/Beat";

interface Props {
  line?: boolean;
  floating?: boolean;
  passive?: boolean;
  beats: BeatData[];
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
  height: 1px;
`;

const BarSpace = ({ line, floating, passive, beats = [] }: Props) => {
  return (
    <StyledBarSpace beats={beats} passive={passive}>
      {beats.map((beat, i) => (
        <Beat {...beat} key={i} />
      ))}
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
