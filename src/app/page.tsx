"use client";
import { useRouter } from "next/navigation";

import useAppStore from "@/store/app";
import { Add, Home as HomeIcon, Visibility } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Link,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Home = () => {
  const router = useRouter();
  const titles = useAppStore((state) => state.titles);

  const handleClickCreate = () => {
    router.push("/create");
  };

  const handleClickView = (id: number) => {
    router.push(`/view/${id}`);
  };

  return (
    <Box sx={{ px: 2, py: 2 }}>
      <Breadcrumbs sx={{ my: 1, mb: 4 }}>
        <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
          <HomeIcon fontSize="inherit" sx={{ mr: 0.5 }} />
          Music Sheets
        </Link>
      </Breadcrumbs>
      <Stack
        alignContent="center"
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        marginBottom={2}
      >
        <Typography variant="h4">Music Sheets</Typography>
        <Button
          onClick={handleClickCreate}
          sx={{
            alignSelf: "center",
          }}
        >
          <Add sx={{ mr: 0.5 }} fontSize="inherit" />
          Create New Sheet
        </Button>
      </Stack>
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "50%" }}>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell style={{ width: "10%", textAlign: "center" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <tbody>
              {titles && titles.length
                ? titles.map((sheet, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>{sheet.title}</TableCell>
                        <TableCell>{sheet.author}</TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => {
                              handleClickView(i);
                            }}
                            size="small"
                            variant="contained"
                          >
                            <Visibility sx={{ mr: 1 }} fontSize="inherit" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};
export default Home;
