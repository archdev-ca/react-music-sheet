import { SheetData } from "@/interfaces";
import Staff from "./Staff";
import { SheetContextProvider } from "@/context/SheetContext";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from "@mui/joy";

type Props = {
  data: SheetData | undefined;
};

const SheetView = ({ data }: Props) => {
  return (
    <SheetContextProvider>
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
      {data?.staves && data?.staves.length
        ? data?.staves.map((staff, i) => {
            return <Staff staffID={i} data={staff} key={i} />;
          })
        : null}
    </SheetContextProvider>
  );
};

export default SheetView;
