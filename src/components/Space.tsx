import { styled } from "@mui/material";

type StyleSpaceProps = {
  line?: boolean;
  ornamental?: boolean;
};

const StyledLine = styled("div")`
  height: 1px;
  background-color: #000;
`;
const StyledFloatingLine = styled("div")`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const StyledSpace = styled("div")<StyleSpaceProps>(
  ({ theme, ornamental }) => `
  height: 9px;
  padding: 4px 0;
  &:hover {
    background-color: ${ornamental ? "inherit" : theme.palette.primary.light};
  }
  &:hover > ${StyledLine} {
    background-color: #f00 !important;
  }
`
);

type Props = {
  line?: boolean;
  floating?: boolean;
  ornamental?: boolean;
};

function Space({ line, floating, ornamental }: Props) {
  return (
    <StyledSpace ornamental={ornamental}>
      {!floating && line ? <StyledLine /> : null}
      {floating && line ? <StyledFloatingLine /> : null}
    </StyledSpace>
  );
}

export default Space;
