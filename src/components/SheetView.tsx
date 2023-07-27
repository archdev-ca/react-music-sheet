import { SheetData, SheetRowInterface } from "@/interfaces";
import Staff from "./Staff";
import { SheetContext } from "@/context/SheetContext";
import { Box, FormControl, FormLabel, Grid, Input } from "@mui/joy";
import { ChangeEvent, useContext, useEffect, useState } from "react";

type Props = {
  data: SheetRowInterface | undefined;
};

const SheetView = ({ data }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const { sheetData, setSheetData } = useContext(SheetContext);

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
    if (data != undefined) {
      setSheetData(data);
    }
  }, [data]);

  useEffect(() => {
    setTitle(sheetData.title);
    setAuthor(sheetData.author);
  }, [sheetData]);

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
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
      {sheetData.sheetData?.staves && sheetData.sheetData?.staves.length
        ? sheetData.sheetData?.staves.map((staff, i) => {
            return <Staff staffID={i} data={staff} key={i} />;
          })
        : null}
    </>
  );
};

export default SheetView;
