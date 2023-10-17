import { Box } from "@mui/material";
import Staff from "./Staff";

type Props = {};

function GrandStaff({}: Props) {
  return (
    <Box>
      <Staff type="treble" />
      <Staff type="bass" />
    </Box>
  );
}

export default GrandStaff;
