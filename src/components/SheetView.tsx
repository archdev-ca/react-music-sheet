import { SheetData } from "@/interfaces";
import Staff from "./Staff";
import { SheetContext, SheetContextProvider } from "@/context/SheetContext";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from "@mui/joy";
import { useContext, useEffect } from "react";

type Props = {
  data: SheetData | undefined;
};

const SheetView = ({ data }: Props) => {
  const { sheetData, setSheetData } = useContext(SheetContext);

  useEffect(() => {
    if (data != undefined) {
      setSheetData(data);
    }
  }, [data]);

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>Author</FormLabel>
              <Input placeholder="Author" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      {sheetData?.staves && sheetData?.staves.length
        ? sheetData?.staves.map((staff, i) => {
            return <Staff staffID={i} data={staff} key={i} />;
          })
        : null}
    </>
  );
};

export default SheetView;
