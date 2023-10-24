import { Box } from "@mui/material";
import Staff from "./Staff";

type Props = {};

function GrandStaff({}: Props) {
  return (
    <Box>
      <div style={{ height: 40 }} />
      <Staff type="treble" />
      <div style={{ height: 40 }} />
      <Staff type="bass" />
      <div style={{ height: 40 }} />
    </Box>
  );
}

export default GrandStaff;
