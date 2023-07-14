import Staff from "@/components/Staff";
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

const SheetCreate = () => {
  const {
    sheetData: noteData,
    activeNote,
    setActiveNote,
    timeSignature,
    setTimeSignature,
  } = useContext(AppContext);

  const handleClickNote = (note: number) => {
    if (activeNote === note) {
      setActiveNote(null);
    } else {
      setActiveNote(note);
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

  const getCursor = (note: number | null) => {
    if (!note) {
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
    if (noteImageMap[note]) {
      return noteImageMap[note];
    }
    return null;
  };

  const cursor = getCursor(activeNote);

  return (
    <>
      <h2 className="text-2xl">Create Sheet Music</h2>
      <Card sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            variant={activeNote === 1 ? "outlined" : "plain"}
            onClick={() => {
              handleClickNote(1);
            }}
          >
            <img
              src={wholeNote}
              alt=""
              style={{ width: "auto", height: " 10px" }}
            />
          </IconButton>
          <IconButton
            variant={activeNote === 2 ? "outlined" : "plain"}
            onClick={() => {
              handleClickNote(2);
            }}
          >
            <img
              src={halfNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton
            variant={activeNote === 4 ? "outlined" : "plain"}
            onClick={() => {
              handleClickNote(4);
            }}
          >
            <img
              src={quarterNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton
            variant={activeNote === 8 ? "outlined" : "plain"}
            onClick={() => {
              handleClickNote(8);
            }}
          >
            <img
              src={eightNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton
            variant={activeNote === 16 ? "outlined" : "plain"}
            onClick={() => {
              handleClickNote(16);
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
      </Card>
      <Card
        sx={{
          cursor: activeNote
            ? `url(${cursor?.image}) ${cursor?.x} ${cursor?.y}, auto`
            : "default",
        }}
      >
        <SheetView data={noteData} />
        <Button startDecorator={<Add />} variant="plain">
          Add Staff
        </Button>
      </Card>
    </>
  );
};

export default SheetCreate;
