import { SheetRowInterface } from "@/interfaces";
import Staff from "./Staff";

type Props = {
  data: SheetRowInterface | undefined;
};

const SheetView = ({ data }: Props) => {
  return (
    <>
      {data?.sheetData?.staves && data?.sheetData?.staves.length
        ? data?.sheetData?.staves.map((staff, i) => {
            return <Staff staffID={i} data={staff} key={i} />;
          })
        : null}
    </>
  );
};

export default SheetView;
