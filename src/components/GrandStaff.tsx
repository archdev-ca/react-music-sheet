import { Box } from "@mui/material";
import Staff from "@/components/Staff";

type Props = {};

function GrandStaff({}: Props) {
  return (
    <Box sx={{ px: 2 }}>
      <div style={{ height: 40 }} />
      <Staff type="treble" />
      <div style={{ height: 40 }} />
      <Staff type="bass" />
      <div style={{ height: 40 }} />
    </Box>
  );
}

export default GrandStaff;
