import { FormInterface } from "@/interfaces/common";
import { Box, Grid, FormControl, FormLabel, Input } from "@mui/joy";
import { UseFormRegister } from "react-hook-form";

type Props = {
  data: {
    title: string;
    author: string;
  };
  readOnly: boolean;
  register: UseFormRegister<FormInterface>;
};

function SheetMeta({ data, readOnly, register }: Props) {
  const { title, author } = data;
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              {...register("title")}
              placeholder="Title"
              value={title}
              name="title"
              readOnly={readOnly}
            />
            {/* <FormHelperText>This is a helper text.</FormHelperText> */}
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input
              {...register("author")}
              placeholder="Author"
              value={author}
              name="author"
              readOnly={readOnly}
            />
            {/* <FormHelperText>This is a helper text.</FormHelperText> */}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SheetMeta;
