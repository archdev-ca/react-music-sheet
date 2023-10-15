import useAppStore from "@/store/app";
import useSheetStore from "@/store/sheet";
import { Add, Home, Visibility } from "@mui/icons-material";
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
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SheetIndex = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const titles = useAppStore((state) => state.titles);
  const { data, setData } = useSheetStore((state) => state);

  const handleClickCreate = () => {
    navigate("/create");
  };

  const handleClickView = (id: number) => {
    navigate(`/view/${id}`);
  };

  useEffect(() => {
    if (id !== undefined && titles[Number(id)]) {
      setData(titles[Number(id)]);
    }
  }, [titles, id]);

  return (
    <>
      <Box sx={{ px: 2, py: 2 }}>
        <Breadcrumbs sx={{ my: 1, mb: 4 }}>
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
        <Card>Some Stuff</Card>
      </Box>
    </>
  );
};
export default SheetIndex;
