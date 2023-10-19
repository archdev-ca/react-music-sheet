import { Box, styled } from "@mui/material";
import treble from "./../assets/images/treble.png";
import bass from "./../assets/images/bass.png";
import Space from "./Space";
import BeatRow from "./BeatRow";

type Props = {
  type: "treble" | "bass";
};

const SpaceLayer = styled("div")`
  position: relative;
`;

const SymbolLayer = styled("div")`
  position: absolute;
  padding-left: 5px;
  width: 75px;
`;

function Staff({ type }: Props) {
  let sigImage = "";
  let sigImageProps = {};
  switch (type) {
    case "treble":
      sigImage = treble;
      sigImageProps = {
        width: 35,
        style: { position: "relative", top: "-4px" },
      };
      break;
    case "bass":
      sigImage = bass;
      sigImageProps = {
        width: 40,
        style: { position: "relative", top: "16px" },
      };
      break;
    default:
      sigImage = treble;
  }
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <SpaceLayer>
        <SymbolLayer>
          <img src={sigImage} alt="" width="20" {...sigImageProps} />
        </SymbolLayer>
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
      </SpaceLayer>
      <BeatRow />
      <BeatRow />
    </Box>
  );
}

export default Staff;
