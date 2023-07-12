import Staff from "@/components/Staff";
import { Box, Card, IconButton } from "@mui/joy";
import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";

const SheetCreate = () => {
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
          <IconButton>
            <img
              src={wholeNote}
              alt=""
              style={{ width: "auto", height: " 10px" }}
            />
          </IconButton>
          <IconButton>
            <img
              src={halfNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton>
            <img
              src={quarterNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton>
            <img
              src={eightNote}
              alt=""
              style={{ width: "auto", height: " 28px" }}
            />
          </IconButton>
          <IconButton>
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
