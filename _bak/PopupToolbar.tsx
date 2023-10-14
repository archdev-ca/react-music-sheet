import { Card, CardContent, IconButton, Stack, styled } from "@mui/joy";
import ClearIcon from "@mui/icons-material/Clear";
import * as React from "react";
import { SelectionContext } from "@/context/SelectionContext";
import sharpImage from "@/assets/sharp.png";
import { AppContext } from "@/context/AppContext";
import { produce } from "immer";
import { BeatData, NoteData } from "@/interfaces";

const ToolbarWrapper = styled("div")`
  position: absolute;
  left: 0;
  z-index: 4;
`;

const PopupToolbar = () => {
  const { selectedSymbol, setSelectedSymbol } =
    React.useContext(SelectionContext);
  const { sheetData, setSheetData } = React.useContext(AppContext);
  const thisToolbarHeight = 56;
  const target =
    selectedSymbol && selectedSymbol.id
      ? document.getElementById(selectedSymbol.id)
      : null;
  const coords = { x: 0, y: 0 };
  if (target) {
    const targetCoords = target.getBoundingClientRect();
    coords["x"] = targetCoords.x + targetCoords.width;
    coords["y"] = targetCoords.y - thisToolbarHeight + window.scrollY;
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

  const handleClickDelete = () => {
    const newState = produce(sheetData, (draft) => {
      if (
        selectedSymbol &&
        selectedSymbol.staffID !== undefined &&
        selectedSymbol.barID !== undefined &&
        selectedSymbol.beatIndex !== undefined
      ) {
        // Delete rest
        if (selectedSymbol.type === "rest") {
          draft?.staves?.[selectedSymbol?.staffID]?.[
            selectedSymbol?.clef
          ]?.bars[selectedSymbol?.barID]?.beats?.splice(
            selectedSymbol?.beatIndex,
            1
          );
        }

        // Delete note
        if (
          selectedSymbol.type === "note" &&
          selectedSymbol.noteID !== undefined
        ) {
          draft?.staves?.[selectedSymbol?.staffID]?.[
            selectedSymbol?.clef
          ]?.bars[selectedSymbol?.barID]?.beats?.[
            selectedSymbol?.beatIndex
          ].notes?.splice(selectedSymbol.noteID, 1);
        }
      }
    });
    setSheetData(newState);
    setSelectedSymbol(null);
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
          borderRadius: 40,
          boxShadow: "0 0 10px 0 rgba(0,0,0, .25)",
          p: 1,
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            sx={{
              p: 0,
              whiteSpace: "nowrap",
            }}
          >
            {selectedSymbol && selectedSymbol.type === "note" ? (
              <IconButton
                color="primary"
                onClick={handleClickSharp}
                size="sm"
                variant={noteData?.sharp ? "solid" : "plain"}
                sx={{ borderRadius: "50%" }}
              >
                <img alt="" height="14" src={sharpImage} />
              </IconButton>
            ) : null}
            <IconButton
              color="danger"
              onClick={handleClickDelete}
              size="sm"
              variant="plain"
              sx={{ borderRadius: "50%" }}
            >
              <ClearIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </ToolbarWrapper>
  );
};

export default PopupToolbar;
