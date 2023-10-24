import { styled } from "@mui/material";
import Space from "./Space";

const BeatRowContainer = styled("div")`
  width: 200px;
`;

type Props = {
  children: React.ReactNode;
};

function BeatRow({ children }: Props) {
  return <BeatRowContainer>{children}</BeatRowContainer>;
}

export default BeatRow;
