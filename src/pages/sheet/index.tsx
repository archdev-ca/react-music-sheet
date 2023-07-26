import usePersistedData from "@/hooks/usePersistedData";
import { Add, Home, Visibility } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Table,
  Typography,
} from "@mui/joy";
import { useNavigate } from "react-router-dom";

const SheetIndex = () => {
  const navigate = useNavigate();
  const { sheets } = usePersistedData();

  const handleClickCreate = () => {
    navigate("/create");
  };

  const handleClickView = (id: number) => {
    navigate(`/view/${id}`);
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumbs" separator="›">
        <Link href="/">
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
        <Typography level="h4">Sheet Music</Typography>
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
        <CardContent>
          <Table variant="plain">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Title</th>
                <th>Author</th>
                <th style={{ width: "10%", textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sheets && sheets.length
                ? sheets.map((sheet, i) => {
                    return (
                      <tr key={i}>
                        <td>{sheet.title}</td>
                        <td>{sheet.author}</td>
                        <td align="center">
                          <Button
                            onClick={() => {
                              handleClickView(i);
                            }}
                            size="sm"
                            variant="soft"
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
    </>
  );
};
export default SheetIndex;
