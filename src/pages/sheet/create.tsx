import { Box, Button, Card, IconButton, Option, Select } from "@mui/joy";
import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Add from "@mui/icons-material/Add";
import { NoteCursorMap } from "@/interfaces/images";
import SheetView from "@/components/SheetView";
import { BeatType } from "@/interfaces";
import { ToolData } from "@/interfaces/common";
import { PlayArrow } from "@mui/icons-material";

const SheetCreate = () => {
  const {
    sheetData,
    activeTool,
    setActiveTool,
    timeSignature,
    setTimeSignature,
  } = useContext(AppContext);

  const handleClickNote = (type: BeatType, length: number) => {
    if (activeTool?.type === type && activeTool?.length === length) {
      setActiveTool(null);
    } else {
      setActiveTool({
        type,
        length,
      });
    }
  };

  const handleChangeSignature = (
    e: React.SyntheticEvent | null,
    value: string | null
  ) => {
    let sig = value?.split("/");
    setTimeSignature({
      bpm: Number(sig?.[0]),
      beat: Number(sig?.[1]),
    });
  };

  const handlePreviewMusic = () => {
    console.log(sheetData);
    console.log(JSON.stringify(sheetData));
  };

  const getCursor = (toolData: ToolData | null) => {
    if (!toolData) {
      return null;
    }
    const noteImageMap: NoteCursorMap = {
      1: {
        image: wholeNote,
        x: "7",
        y: "7",
      },
      2: {
        image: halfNote,
        x: "8",
        y: "36",
      },
      4: {
        image: quarterNote,
        x: "8",
        y: "36",
      },
      8: {
        image: eightNote,
        x: "8",
        y: "36",
      },
      16: {
        image: sixteenthNote,
        x: "8",
        y: "36",
      },
    };
    if (noteImageMap[toolData.length]) {
      return noteImageMap[toolData.length];
    }
    return null;
  };

  const cursor = getCursor(activeTool);

  return (
    <>
      <h2 className="text-2xl">Create Sheet Music</h2>
      <Card sx={{ mb: 2, p: 0, display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            p: 1.5,
            gap: 1,
          }}
        >
          <IconButton
            variant={
              activeTool?.type === "note" && activeTool?.length === 1
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("note", 1);
            }}
          >
            <img
              src={wholeNote}
              alt=""
              style={{ width: "auto", height: " 10px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "note" && activeTool?.length === 2
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("note", 2);
            }}
          >
            <img
              src={halfNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "note" && activeTool?.length === 4
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("note", 4);
            }}
          >
            <img
              src={quarterNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "note" && activeTool?.length === 8
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("note", 8);
            }}
          >
            <img
              src={eightNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "note" && activeTool?.length === 16
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("note", 16);
            }}
          >
            <img
              src={sixteenthNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <Select
            defaultValue={`${timeSignature?.bpm}/${timeSignature?.beat}`}
            onChange={handleChangeSignature}
          >
            <Option value="4/4">4/4</Option>
            <Option value="3/4">3/4</Option>
            <Option value="2/4">2/4</Option>
            <Option value="2/2">2/2</Option>
            <Option value="3/8">3/8</Option>
            <Option value="6/8">6/8</Option>
            <Option value="9/8">9/8</Option>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 1.5,
            gap: 1,
            borderLeft: "1px solid #ddd",
          }}
        >
          <IconButton
            variant={
              activeTool?.type === "note" && activeTool?.length === 1
                ? "outlined"
                : "plain"
            }
            onClick={handlePreviewMusic}
          >
            <PlayArrow />
          </IconButton>
        </Box>
      </Card>
      <Card
        sx={{
          cursor: activeTool
            ? `url(${cursor?.image}) ${cursor?.x} ${cursor?.y}, auto`
            : "default",
        }}
      >
        <SheetView data={sheetData} />
        <Button startDecorator={<Add />} variant="plain">
          Add Staff
        </Button>
      </Card>
    </>
  );
};

export default SheetCreate;
