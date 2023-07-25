import { Card, CardContent, IconButton, Sheet, Stack, styled } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext } from "react";
import { SelectionContext } from "@/context/SelectionContext";
import sharpImage from "@/assets/sharp.png";
import { AppContext } from "@/context/AppContext";
import { produce } from "immer";
import { BeatData, NoteData } from "@/interfaces";

type Props = {};

const ToolbarWrapper = styled("div")`
  position: absolute;
  left: 0;
  z-index: 4;
`;

const PopupToolbar = (props: Props) => {
  const { selectedSymbol } = useContext(SelectionContext);
  const { sheetData, setSheetData } = useContext(AppContext);

  const target =
    selectedSymbol && selectedSymbol.id
      ? document.getElementById(selectedSymbol.id)
      : null;
  const coords = { x: 0, y: 0 };
  if (target) {
    const targetCoords = target.getBoundingClientRect();
    coords["x"] = targetCoords.x + targetCoords.width;
    coords["y"] = targetCoords.y - 56;
  }

  let beatData: BeatData | undefined = undefined;
  let noteData: NoteData | undefined = undefined;

  // Get the beat data
  if (
    selectedSymbol &&
    selectedSymbol.staffID !== undefined &&
    selectedSymbol.barID !== undefined &&
    selectedSymbol.beatIndex !== undefined &&
    selectedSymbol.clef !== undefined
  ) {
    beatData =
      sheetData.staves?.[selectedSymbol?.staffID]?.[selectedSymbol?.clef]?.bars[
        selectedSymbol?.barID
      ]?.beats?.[selectedSymbol?.beatIndex];
  }

  // Get the note data
  if (
    beatData &&
    selectedSymbol &&
    selectedSymbol.type === "note" &&
    selectedSymbol.noteID !== undefined
  ) {
    noteData = beatData.notes?.[selectedSymbol.noteID];
  }

  const handleClickSharp = () => {
    const newState = produce(sheetData, (draft) => {
      if (
        selectedSymbol &&
        selectedSymbol.staffID !== undefined &&
        selectedSymbol.barID !== undefined &&
        selectedSymbol.beatIndex !== undefined &&
        selectedSymbol.noteID !== undefined
      ) {
        const note =
          draft?.staves?.[selectedSymbol?.staffID]?.[selectedSymbol?.clef]
            ?.bars[selectedSymbol?.barID]?.beats?.[selectedSymbol?.beatIndex]
            ?.notes?.[selectedSymbol.noteID];

        if (!note) {
          return;
        }

        if (noteData?.sharp) {
          delete note?.sharp;
        } else {
          note.sharp = true;
        }
      }
    });
    setSheetData(newState);
  };

  return (
    <ToolbarWrapper
      style={{
        left: coords.x,
        top: coords.y,
      }}
    >
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: "0 0 10px 0 rgba(0,0,0, .25)",
          p: 1,
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            sx={{
              whiteSpace: "nowrap",
              p: 0,
            }}
          >
            {selectedSymbol && selectedSymbol.type === "note" ? (
              <IconButton
                size="sm"
                variant={noteData?.sharp ? "solid" : "plain"}
                color="primary"
                onClick={handleClickSharp}
              >
                <img src={sharpImage} alt="" height="14" />
              </IconButton>
            ) : null}
            <IconButton size="sm" variant="plain" color="danger">
              <ClearIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </ToolbarWrapper>
  );
};

export default PopupToolbar;
