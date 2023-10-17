import { Box, Card } from "@mui/material";
import GrandStaff from "./GrandStaff";

type Props = {};

function SheetView({}: Props) {
  return (
    <Card>
      <Box>
        <GrandStaff />
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
        >
          <ellipse
            cx={10}
            cy={9}
            rx={8}
            ry={5}
            fill="transparent"
            stroke="inherit"
            transform="skewY(-10)"
            strokeWidth={2}
          />
        </svg>
        <svg
          width="19"
          height="50"
          viewBox="0 0 19 50"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
        >
          <ellipse
            cx={10}
            cy={45}
            rx={8}
            ry={5}
            fill="inherit"
            transform="skewY(-10)"
          />
          <line
            x1="17"
            y1="45"
            x2="17"
            y2="0"
            stroke="inherit"
            strokeWidth={2}
          />
        </svg>
      </Box>
    </Card>
  );
}

export default SheetView;
