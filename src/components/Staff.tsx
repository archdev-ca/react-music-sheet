import { Box } from "@mui/material";
import treble from "./../assets/images/treble.png";
import bass from "./../assets/images/bass.png";
import Space from "./Space";

type Props = {
  type: "treble" | "bass";
};

function Staff({ type }: Props) {
  let sigImage = "";
  let sigImageProps = {};
  switch (type) {
    case "treble":
      sigImage = treble;
      sigImageProps = { width: 20 };
      break;
    case "bass":
      sigImage = bass;
      sigImageProps = { width: 30 };
      break;
    default:
      sigImage = treble;
  }
  return (
    <Box>
      <Box>
        <img src={sigImage} alt="" width="20" {...sigImageProps} />
        <Space line />
        <Space />
        <Space line />
        <Space />
        <Space line />
        <Space />
        <Space line />
        <Space />
        <Space line />
      </Box>
    </Box>
  );
}

export default Staff;
