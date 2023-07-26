import usePersistedData from "@/hooks/usePersistedData";
import { SheetRowInterface } from "@/interfaces";
import { Clear, Edit, Home, Save } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SheetView = () => {
  const { id } = useParams<"id">();
  const { sheets } = usePersistedData();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleClickEdit = () => {
    setIsEditMode(true);
  };
  const handleClickCancel = () => {
    /**
     * @todo: Add warning if there were changes
     */
    setIsEditMode(false);
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
          <Stack direction="row" spacing={1}>
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
            <Button
              onClick={handleClickCancel}
              sx={{
                alignSelf: "center",
              }}
              variant="plain"
              color="neutral"
            >
              <Clear sx={{ mr: 0.5 }} fontSize="inherit" />
              Cancel
            </Button>
          </Stack>
        ) : null}
      </Stack>
      <Card>
        <CardContent></CardContent>
      </Card>
    </>
  );
};
export default SheetView;
