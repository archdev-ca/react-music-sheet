import { Add, Home, Visibility } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Table,
  Typography,
} from "@mui/material";
// import Breadcrumbs from "@/components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import useStorage from "@/hooks/useStorage";

const SheetIndex = () => {
  const navigate = useNavigate();
  const { titles } = useStorage();

  const handleClickCreate = () => {
    navigate("/create");
  };

  const handleClickView = (id: number) => {
    navigate(`/view/${id}`);
  };

  return (
    <>
      <Box sx={{ px: 2, py: 2 }}>
        <Breadcrumbs sx={{ my: 2 }}>
          <Link href="/" sx={{ display: "flex", alignItems: "center" }}>
            <Home fontSize="inherit" sx={{ mr: 0.5 }} />
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
          <Typography variant="h4">Sheet Music</Typography>
          {/* <Button
            onClick={handleClickCreate}
            sx={{
              alignSelf: "center",
            }}
          >
            <Add sx={{ mr: 0.5 }} fontSize="inherit" />
            Create New Sheet
          </Button> */}
        </Stack>
        <Card>
          <CardContent>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>Title</th>
                  <th>Author</th>
                  <th style={{ width: "10%", textAlign: "center" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {titles && titles.length
                  ? titles.map((sheet, i) => {
                      return (
                        <tr key={i}>
                          <td>{sheet.title}</td>
                          <td>{sheet.author}</td>
                          <td align="center">
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
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default SheetIndex;
