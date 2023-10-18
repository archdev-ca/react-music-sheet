import { styled } from "@mui/material";

const StyledSpace = styled("div")`
  padding: 4px 0;
`;

const StyledLine = styled("div")`
  height: 1px;
  background-color: #000;
`;
const StyledFloatingLine = styled("div")`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

type Props = {
  line?: boolean;
  floating?: boolean;
};

function Space({ line, floating }: Props) {
  return (
    <StyledSpace sx={{ height: line ? "auto" : "9px" }}>
      {!floating && line ? <StyledLine /> : null}
      {floating && line ? <StyledFloatingLine /> : null}
    </StyledSpace>
  );
}

export default Space;
