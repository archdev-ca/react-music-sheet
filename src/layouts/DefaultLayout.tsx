import * as React from "react";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
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
          <Sheet
            sx={{
              maxWidth: 1200,
              width: "100%",
              mx: "auto",
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography level="h4">
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
                variant="plain"
              >
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Sheet>
        </CardContent>
      </Card>
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
    </>
  );
};

export default DefaultLayout;
