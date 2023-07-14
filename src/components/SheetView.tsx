import { SheetData } from "@/interfaces";
import Staff from "./Staff";

type Props = {
  data: SheetData;
};

const SheetView = ({ data }: Props) => {
  const { staves } = data;
  return (
    <>
      {staves && staves.length
        ? staves.map((staff, i) => {
            console.log({ staff });
            return <Staff data={staff.clefs} key={i} />;
          })
        : null}
    </>
  );
};

export default SheetView;
