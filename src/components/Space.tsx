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
const StyledLine2 = mstyled("div")`
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
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.ornamental ? "inherit" : props.theme.palette.primary.light};
  }
  &:hover > ${StyledLine} {
    background-color: #fff;
  }
`;

const StyledSpace2 = mstyled("div")`
  height: 9px;
  padding: 4px 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #00f;
  }
  &:hover > ${StyledLine2} {
    background-color: #fff;
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
      <StyledSpace2 ornamental={ornamental}>
        {!floating && line ? <StyledLine /> : null}
        {floating && line ? <StyledFloatingLine /> : null}
      </StyledSpace2>
    </>
  );
}

export default Space;
