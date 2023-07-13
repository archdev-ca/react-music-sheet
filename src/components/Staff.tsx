import { styled } from "@mui/joy";
import Clef from "./Clef";

const Spacer = styled("div")`
  margin-bottom: 1rem;
`;

const Staff = () => {
  return (
    <div>
      <Clef clef="treble" />
      <Spacer />
      <Clef clef="bass" />
    </div>
  );
};

export default Staff;
