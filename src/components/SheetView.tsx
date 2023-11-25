import { Box, Card } from "@mui/material";
import GrandStaff from "@/components/GrandStaff";

type Props = {};

function SheetView({}: Props) {
  return (
    <Card>
      <Box>
        <GrandStaff />
      </Box>
    </Card>
  );
}

export default SheetView;
