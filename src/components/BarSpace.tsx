import { styled } from "@mui/joy";

const StyledBarSpace = styled("div")(({ theme }) => ({
  height: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.plainHoverBg,
  },
}));

const BarSpace = () => {
  return <StyledBarSpace></StyledBarSpace>;
};

export default BarSpace;
