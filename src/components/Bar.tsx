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

const StyledBar = styled("div")`
  position: relative;
  width: 25%;
  display: flex;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    top: 5px;
    bottom: 5px;
    width: 2px;
    background-color: #000;
`;

const BEAT_WIDTH = 36;

const Bar = ({ clef, data, staffID, barID }: Props) => {
  const { timeSignature } = useContext(AppContext);
  const singleBeatWidth = (1 / timeSignature.beatsPerBar) * 100;
  return (
    <StyledBar>
      {data && data.beats && data.beats.length ? (
        <BarColumn
          barID={barID}
          beatIndex={[0, null]}
          clef={clef}
          staffID={staffID}
        />
      ) : null}
      {data && data.beats && data.beats.length ? (
        data.beats.map((beat, i) => {
          const colWidth = singleBeatWidth * (timeSignature.beat / beat.length);
          const columns = (
            <React.Fragment key={i}>
              <BarColumn
                barID={barID}
                beatIndex={[i, 0]}
                clef={clef}
                data={beat}
                staffID={staffID}
                width={`${colWidth}%`}
              />
              {i !== data.beats.length - 1 ? (
                <BarColumn
                  barID={barID}
                  beatIndex={[i + 1, 1]}
                  clef={clef}
                  staffID={staffID}
                />
              ) : null}
            </React.Fragment>
          );
          return columns;
        })
      ) : (
        <BarColumn
          barID={barID}
          beatIndex={[-1, 0]}
          clef={clef}
          staffID={staffID}
        />
      )}
      {data && data.beats && data.beats.length ? (
        <BarColumn
          barID={barID}
          beatIndex={[-1, null]}
          clef={clef}
          staffID={staffID}
        />
      ) : null}
    </StyledBar>
  );
};

export default Bar;
