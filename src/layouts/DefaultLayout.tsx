import { Card, Grid, IconButton, Box, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: 2,
            py: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h4">
                  <Link href="/">
                    <img
                      src={logo.src}
                      style={{
                        marginBottom: "-10px",
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
            </Grid>
          </Grid>
        </Box>
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
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DefaultLayout;
