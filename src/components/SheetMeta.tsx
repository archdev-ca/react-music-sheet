import { FormInterface } from "@/interfaces/common";
import { Box, Grid, FormControl, FormLabel, Input } from "@mui/joy";
import { ForwardedRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  data: {
    title: string;
    author: string;
  };
  readOnly: boolean;
  ref?: ForwardedRef<HTMLFormElement>;
};

function SheetMeta({ data, readOnly, ref }: Props) {
  const { title, author } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = (data) => console.log(data);

  return (
    <Box sx={{ mb: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
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
      </form>
    </Box>
  );
}

export default SheetMeta;
