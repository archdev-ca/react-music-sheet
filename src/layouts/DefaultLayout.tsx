import { Grid, Sheet } from "@mui/joy";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Sheet
      sx={{
        maxWidth: 1200,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Sheet>
  );
};

export default DefaultLayout;
