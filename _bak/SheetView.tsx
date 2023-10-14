import { SheetRowInterface } from "@/interfaces";
import Staff from "./Staff";

type Props = {
  data: SheetRowInterface | undefined;
  readOnly?: boolean;
};

const SheetView = ({ data, readOnly }: Props) => {
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
