import * as React from "react";
import { styled } from "@mui/joy";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import { BarData, ClefType } from "@/interfaces";

interface Props {
  clef: ClefType;
  className?: "string";
  data?: BarData;
  staffID: number;
  barID: number;
}

const StyledBar = styled("div")<Props>(
  ({ clef }) => `
  position: relative;
  width: 25%;
  display: flex;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    top: ${clef === "treble" ? "158px" : "12px"};
    bottom: ${clef === "treble" ? "22px" : "115px"};
    width: 1px;
    background-color: #000;
    z-index: 2;
  }
`
);

const Bar = ({ clef, data, staffID, barID }: Props) => {
  const { timeSignature } = useContext(AppContext);
  let orderIndex = 0;
  return (
    <StyledBar barID={barID} staffID={staffID} clef={clef}>
      {data && data.beats && data.beats.length ? (
        <BarColumn
          beatIndex={[0, 0]}
          barID={barID}
          staffID={staffID}
          clef={clef}
        />
      ) : null}
      {data && data.beats && data.beats.length ? (
        data.beats.map((beat, i) => {
          const columns = (
            <React.Fragment key={i}>
              <BarColumn
                barID={barID}
                beatIndex={[i, 0]}
                staffID={staffID}
                data={beat}
                clef={clef}
              />
              {i !== data.beats.length - 1 ? (
                <BarColumn
                  barID={barID}
                  beatIndex={[i + 1, 1]}
                  staffID={staffID}
                  clef={clef}
                />
              ) : null}
            </React.Fragment>
          );
          orderIndex += 1;
          return columns;
        })
      ) : (
        <BarColumn
          barID={barID}
          beatIndex={[-1, 0]}
          staffID={staffID}
          clef={clef}
        />
      )}
      {data && data.beats && data.beats.length ? (
        <BarColumn
          beatIndex={[-1, 0]}
          barID={barID}
          staffID={staffID}
          clef={clef}
        />
      ) : null}
    </StyledBar>
  );
};

export default Bar;
