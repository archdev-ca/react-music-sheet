import { Box, styled } from "@mui/material";
import Space from "./Space";

const BeatRowContainer = styled("div")`
  width: 200px;
`;

type Props = {};

function BeatRow({}: Props) {
  return (
    <BeatRowContainer>
      <Box>
        <Space line floating />
        <Space floating />
        <Space line />
        <Space />
        <Space line />
        <Space />
        <Space line />
        <Space />
        <Space line />
        <Space />
        <Space line />
        <Space floating />
        <Space line floating />
      </Box>
    </BeatRowContainer>
  );
}

export default BeatRow;
