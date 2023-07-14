import { styled } from "@mui/joy";
import Clef from "./Clef";
import { StaffData } from "@/interfaces/index";

interface Props {
  data: StaffData;
}

const Spacer = styled("div")`
  margin-bottom: 1rem;
`;

const Staff = ({ data }: Props) => {
  return (
    <div>
      <Clef clef="treble" data={data.treble} />
      <Spacer />
      <Clef clef="bass" data={data.bass} />
    </div>
  );
};

export default Staff;
