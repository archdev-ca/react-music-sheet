import { Grid } from "@mui/joy";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
