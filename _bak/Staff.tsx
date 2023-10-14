import { styled } from "@mui/material";
import Clef from "./Clef";
import { StaffData } from "@/interfaces/index";

interface Props {
  data: StaffData;
  staffID: number;
}

const Spacer = styled("div")`
  margin-bottom: 2rem;
`;

const Staff = ({ data, staffID }: Props) => {
  return (
    <div>
      <Clef
        style={{ paddingTop: 36, paddingBottom: 18 }}
        staffID={staffID}
        clef="treble"
        data={data.treble}
      />
      <Spacer />
      <Clef
        style={{ paddingTop: 18, paddingBottom: 18, marginBottom: "4rem" }}
        staffID={staffID}
        clef="bass"
        data={data.bass}
      />
    </div>
  );
};

export default Staff;
