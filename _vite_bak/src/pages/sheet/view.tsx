import SheetView from "@/components/SheetView";
import useAppStore from "@/store/app";
import useSheetStore from "@/store/sheet";
import { Home } from "@mui/icons-material";
import { Box, Breadcrumbs, Card, Link, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SheetIndex = () => {
  const { id } = useParams<"id">();
  const titles = useAppStore((state) => state.titles);
  const { data, setData } = useSheetStore((state) => state);

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
          {data && data.title ? <Typography>{data.title}</Typography> : null}
        </Breadcrumbs>
        <Stack
          alignContent="center"
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          marginBottom={2}
        >
          <Typography variant="h4">View Music</Typography>
        </Stack>
        <Box sx={{ mb: 2 }}>
          <Card>Some Stuff</Card>
        </Box>
        <SheetView />
      </Box>
    </>
  );
};
export default SheetIndex;
