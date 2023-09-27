import { SheetRowInterface } from "@/interfaces";
import Staff from "./Staff";
import { Box, FormControl, FormLabel, Grid, Input } from "@mui/joy";
import { ChangeEvent, useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormInterface } from "@/interfaces/common";

type Props = {
  data: SheetRowInterface | undefined;
  register: UseFormRegister<FormInterface>;
};

const SheetView = ({ data, register }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const fieldSetters: Record<
    string,
    React.Dispatch<React.SetStateAction<string>>
  > = {
    title: setTitle,
    author: setAuthor,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (fieldSetters && fieldSetters[e.target.name]) {
      fieldSetters[e.target.name](e.target.value);
    }
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setAuthor(data.author);
    }
  }, [data]);

  return (
    <>
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      {data?.sheetData?.staves && data?.sheetData?.staves.length
        ? data?.sheetData?.staves.map((staff, i) => {
            return <Staff staffID={i} data={staff} key={i} />;
          })
        : null}
    </>
  );
};

export default SheetView;
