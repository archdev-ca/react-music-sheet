import { styled } from "@mui/joy";
import Clef from "./Clef";
import { SheetData } from "@/interfaces/index";

interface Props {
  data: SheetData;
}

const Spacer = styled("div")`
  margin-bottom: 1rem;
`;

const Staff = ({}: Props) => {
  return (
    <div>
      <Clef clef="treble" />
      <Spacer />
      <Clef clef="bass" />
    </div>
  );
};

export default Staff;
