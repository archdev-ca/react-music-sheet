import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { BeatData } from "@/interfaces";
import { styled } from "@mui/joy";
import { Clef } from "@/interfaces/common";
import { produce } from "immer";

interface Props {
  line?: boolean;
  floating?: boolean;
  passive?: boolean;
  staffID: number;
  barID: number;
  note: BeatData["note"];
  variation: BeatData["variation"];
  clef?: Clef;
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
  clef,
  line,
  floating,
  passive,
  staffID,
  barID,
  note,
  variation,
}: Props) => {
  const { activeTool, sheetData, setSheetData } = useContext(AppContext);
  const handleAddBeat = () => {
    if (staffID !== undefined && clef && barID !== undefined && activeTool) {
      const nextState = produce(sheetData, (draft) => {
        if (draft?.staves?.[staffID]?.[clef]?.bars?.[barID]) {
          draft?.staves?.[staffID]?.[clef]?.bars?.[barID].beats.push({
            type: activeTool.type,
            note,
            variation,
            length: activeTool.length,
          });
        }
      });
      setSheetData(nextState);
    }
  };

  return (
    <StyledBarSpace
      note={note}
      variation={variation}
      passive={passive}
      staffID={staffID}
      barID={barID}
      onClick={handleAddBeat}
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
