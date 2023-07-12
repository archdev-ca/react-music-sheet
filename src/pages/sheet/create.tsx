import Staff from "@/components/Staff";
import { Box, Card, IconButton } from "@mui/joy";
import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const SheetCreate = () => {
  const { activeNote, setActiveNote } = useContext(AppContext);

  const handleClickNote = (note) => {
    setActiveNote(note);
  };

  console.log({ activeNote });

  return (
    <>
      <h2 className="text-2xl">Create Sheet Music</h2>
      <Card>
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
        </Box>
      </Card>
      <Card>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        ></Box>
        <Staff />
      </Card>
    </>
  );
};

export default SheetCreate;
