import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "@/assets/images/logo.svg";

const DefaultLayout = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 0,
        }}
      >
        <CardContent>
          <Box
            sx={{
              maxWidth: 1200,
              width: "100%",
              mx: "auto",
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h4">
                <Link to="/">
                  <img
                    src={logo}
                    style={{
                      marginBottom: "-20px",
                    }}
                  />
                </Link>
              </Typography>
              <IconButton
                component="a"
                href="https://github.com/archdev-ca/react-music-sheet"
                target="_blank"
                // variant="plain"
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DefaultLayout;
