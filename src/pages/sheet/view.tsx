import usePersistedData from "@/hooks/usePersistedData";
import { SheetData, SheetRowInterface } from "@/interfaces";
import { Add, Edit, Home, Save, Visibility } from "@mui/icons-material";
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
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SheetView = () => {
  const navigate = useNavigate();
  const { id } = useParams<"id">();
  const { sheets, setSheets } = usePersistedData();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleClickEdit = () => {
    setIsEditMode(true);
  };

  const handleClickSave = () => {};

  let currentSheet: SheetRowInterface | undefined;
  if (id !== undefined) {
    currentSheet = sheets[Number(id)];
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumbs" separator="›">
        <Link href="/">
          <Home fontSize="inherit" sx={{ mr: 0.5 }} />
          Music Sheets
        </Link>
        <Typography>{currentSheet && currentSheet.title}</Typography>
      </Breadcrumbs>
      <Stack
        alignContent="center"
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        marginBottom={2}
      >
        <Typography level="h4">View Sheet Music</Typography>
        {!isEditMode ? (
          <Button
            onClick={handleClickEdit}
            sx={{
              alignSelf: "center",
            }}
          >
            <Edit sx={{ mr: 0.5 }} fontSize="inherit" />
            Edit Sheet
          </Button>
        ) : null}
        {isEditMode ? (
          <Button
            onClick={handleClickSave}
            sx={{
              alignSelf: "center",
            }}
            color="success"
          >
            <Save sx={{ mr: 0.5 }} fontSize="inherit" />
            Save Changes
          </Button>
        ) : null}
      </Stack>
      <Card>
        <CardContent></CardContent>
      </Card>
    </>
  );
};
export default SheetView;
