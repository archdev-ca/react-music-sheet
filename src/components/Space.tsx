import { styled as mstyled } from "@mui/material";
import styled from "@emotion/styled";

type StyleSpaceProps = {
  line?: boolean;
  ornamental?: boolean;
};

const StyledLine = styled.div`
  height: 1px;
  background-color: #000;
`;
const StyledFloatingLine = mstyled("div")`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const StyledSpace = styled.div<StyleSpaceProps>`
  height: 9px;
  padding: 4px 0;
  &:hover {
    background-color: ${(props) =>
      props.ornamental ? "inherit" : props.theme.palette.primary.light};
  }
  &:hover > ${StyledLine} {
    background-color: ${(props) => (props.ornamental ? "#000" : "#fff")};
  }
`;

type Props = {
  line?: boolean;
  floating?: boolean;
  ornamental?: boolean;
};

function Space({ line, floating, ornamental }: Props) {
  return (
    <>
      <StyledSpace ornamental={ornamental}>
        {!floating && line ? <StyledLine /> : null}
        {floating && line ? <StyledFloatingLine /> : null}
      </StyledSpace>
    </>
  );
}

export default Space;
