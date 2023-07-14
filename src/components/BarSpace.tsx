import { BeatData } from "@/interfaces";
import { styled } from "@mui/joy";

interface Props {
  line?: boolean;
  floating?: boolean;
  passive?: boolean;
  staffID: number;
  barID: number;
  note: BeatData["note"];
  variation: BeatData["variation"];
}

const defaultProps = {
  line: false,
  floating: false,
  passive: false,
};

const StyledBarSpace = styled("div")<Props>(({ theme, passive }) => ({
  position: "relative",
  zIndex: 1,
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

const BarSpace = ({
  line,
  floating,
  passive,
  staffID,
  barID,
  note,
  variation,
}: Props) => {
  return (
    <StyledBarSpace
      note={note}
      variation={variation}
      passive={passive}
      staffID={staffID}
      barID={barID}
    >
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
