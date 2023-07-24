import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { NoteType } from "@/interfaces";
import { styled } from "@mui/joy";
import { Clef } from "@/interfaces/common";
import { produce } from "immer";

interface Props {
  line?: boolean;
  floating?: boolean;
  passive?: boolean;
  staffID: number;
  barID: number;
  beatIndex?: [number | null, number | null];
  note: NoteType;
  variation: number;
  clef?: Clef;
  locked?: boolean;
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
  beatIndex,
  passive,
  staffID,
  barID,
  note,
  variation,
  locked,
}: Props) => {
  const { activeTool, sheetData, setSheetData } = useContext(AppContext);

  const handleAddBeat = () => {
    if (locked) {
      return false;
    }

    const noteData = {
      note,
      variation,
    };

    if (
      staffID !== undefined &&
      clef &&
      barID !== undefined &&
      beatIndex !== undefined &&
      activeTool
    ) {
      const nextState = produce(sheetData, (draft) => {
        if (beatIndex && beatIndex.toString() === "0,0") {
          // Add to beginning
          draft?.staves?.[staffID]?.[clef]?.bars?.[barID].beats.unshift({
            type: activeTool.type,
            length: activeTool.length,
            notes: [noteData],
          });
        } else if (beatIndex && beatIndex.toString() === "-1,0") {
          // Add to end
          draft?.staves?.[staffID]?.[clef]?.bars?.[barID].beats.push({
            type: activeTool.type,
            length: activeTool.length,
            notes: [noteData],
          });
        } else if (beatIndex && beatIndex.length === 2) {
          const [realBeatID, nudge] = beatIndex;
          // Add note to beat
          if (
            !nudge &&
            realBeatID &&
            draft?.staves?.[staffID]?.[clef]?.bars?.[barID]?.beats?.[
              realBeatID
            ] &&
            draft?.staves?.[staffID]?.[clef]?.bars?.[barID]?.beats?.[realBeatID]
              .notes &&
            draft?.staves?.[staffID]?.[clef]?.bars?.[barID]?.beats?.[realBeatID]
              .notes?.length
          ) {
            draft?.staves?.[staffID]?.[clef]?.bars?.[barID]?.beats?.[
              realBeatID
            ].notes?.push({
              note,
              variation,
            });
          }
          // Add note in between two beats
          if (
            nudge &&
            realBeatID &&
            draft?.staves?.[staffID]?.[clef]?.bars?.[barID]?.beats?.[realBeatID]
          ) {
            draft?.staves?.[staffID]?.[clef]?.bars?.[barID]?.beats?.splice(
              realBeatID,
              0,
              {
                type: activeTool.type,
                length: activeTool.length,
                notes: [noteData],
              }
            );
          }
        }
      });
      setSheetData(nextState);
    }
  };

  return (
    <StyledBarSpace
      beatIndex={beatIndex}
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
