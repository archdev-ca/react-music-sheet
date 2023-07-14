import { styled } from "@mui/joy";
import Clef from "./Clef";
import { StaffData } from "@/interfaces/index";

interface Props {
  data: StaffData;
  staffID: number;
}

const Spacer = styled("div")`
  margin-bottom: 1rem;
`;

const Staff = ({ data, staffID }: Props) => {
  return (
    <div>
      <Clef staffID={staffID} clef="treble" data={data.treble} />
      <Spacer />
      <Clef staffID={staffID} clef="bass" data={data.bass} />
    </div>
  );
};

export default Staff;
