import { Box, Button, Card, IconButton, Option, Select } from "@mui/joy";
import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import wholeRest from "@/assets/rest/wholeRest.png";
import halfRest from "@/assets/rest/halfRest.png";
import quarterRest from "@/assets/rest/quarterRest.png";
import eightRest from "@/assets/rest/eightRest.png";
import sixteenthRest from "@/assets/rest/sixteenthRest.png";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Add from "@mui/icons-material/Add";
import { NoteCursorMap } from "@/interfaces/images";
import SheetView from "@/components/SheetView";
import { BeatType } from "@/interfaces";
import { ToolData } from "@/interfaces/common";
import { PlayArrow } from "@mui/icons-material";
import { getToneSequence, playPreview, preloadAudio } from "@/utils";

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
      beatsPerBar: Number(sig?.[0]),
      beat: Number(sig?.[1]),
    });
  };

  const handlePreviewMusic = () => {
    console.log(JSON.stringify(sheetData));
    const [toneSequence, audioMap] = getToneSequence(sheetData, timeSignature);
    preloadAudio(audioMap, (audioMap) => {
      playPreview(toneSequence, audioMap);
    });
  };

  const getCursor = (toolData: ToolData | null) => {
    if (!toolData) {
      return null;
    }
    const restImageMap: NoteCursorMap = {
      1: {
        image: wholeRest,
        x: "7",
        y: "7",
      },
      2: {
        image: halfRest,
        x: "8",
        y: "36",
      },
      4: {
        image: quarterRest,
        x: "8",
        y: "36",
      },
      8: {
        image: eightRest,
        x: "8",
        y: "36",
      },
      16: {
        image: sixteenthRest,
        x: "8",
        y: "36",
      },
    };
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
    if (toolData.type === "note" && noteImageMap[toolData.length]) {
      return noteImageMap[toolData.length];
    }

    if (toolData.type === "rest" && restImageMap[toolData.length]) {
      return restImageMap[toolData.length];
    }
    return null;
  };

  const cursor = getCursor(activeTool);

  return (
    <>
      <h2 className="text-2xl">Create Sheet Music</h2>
      <Card sx={{ mb: 2, display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
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
              style={{ width: "auto", height: " 24px" }}
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
              style={{ width: "auto", height: " 24px" }}
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
              style={{ width: "auto", height: " 24px" }}
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
              style={{ width: "auto", height: " 24px" }}
            />
          </IconButton>
          <Select
            defaultValue={`${timeSignature?.beatsPerBar}/${timeSignature?.beat}`}
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
            gap: 1,
            borderLeft: "1px dotted #bbb",
            pl: 2,
          }}
        >
          <IconButton
            variant={
              activeTool?.type === "rest" && activeTool?.length === 1
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("rest", 1);
            }}
          >
            <img
              src={wholeRest}
              alt=""
              style={{ width: "auto", height: " 7px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "rest" && activeTool?.length === 2
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("rest", 2);
            }}
          >
            <img
              src={halfRest}
              alt=""
              style={{ width: "auto", height: " 7px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "rest" && activeTool?.length === 4
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("rest", 4);
            }}
          >
            <img
              src={quarterRest}
              alt=""
              style={{ width: "auto", height: " 24px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "rest" && activeTool?.length === 8
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("rest", 8);
            }}
          >
            <img
              src={eightRest}
              alt=""
              style={{ width: "auto", height: " 24px" }}
            />
          </IconButton>
          <IconButton
            variant={
              activeTool?.type === "rest" && activeTool?.length === 16
                ? "outlined"
                : "plain"
            }
            onClick={() => {
              handleClickNote("rest", 16);
            }}
          >
            <img
              src={sixteenthRest}
              alt=""
              style={{ width: "auto", height: " 24px" }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            borderLeft: "1px dotted #bbb",
            pl: 2,
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
