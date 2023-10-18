import { styled } from "@mui/material";

const StyledSpace = styled("div")`
  padding: 4px 0;
`;

const StyledLine = styled("div")`
  height: 1px;
  background-color: #000;
`;

type Props = {
  line?: boolean;
};

function Space({ line }: Props) {
  return (
    <StyledSpace sx={{ height: line ? "auto" : "9px" }}>
      {line ? <StyledLine /> : null}
    </StyledSpace>
  );
}

export default Space;
