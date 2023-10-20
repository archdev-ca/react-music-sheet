import { styled } from "@mui/material";

const StyledLine = styled("div")`
  height: 1px;
  background-color: #000;
`;
const StyledFloatingLine = styled("div")`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledSpace = styled("div")(
  ({ theme }) => `
  padding: 4px 0;
  &:hover {
    background-color: ${theme.palette.primary.light};
  }
`
);

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
