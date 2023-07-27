import Bar from "@/components/Bar";
import { styled } from "@mui/joy";
import BarSignature from "./BarSignature";
import { ClefData, ClefType } from "@/interfaces";
import * as React from "react";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import BarColumn from "./BarColumn";
import { BarData } from "@/interfaces";
import { ToolData } from "@/interfaces/common";
import { NoteCursorMap } from "@/interfaces/images";
import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import wholeRest from "@/assets/rest/wholeRest.png";
import halfRest from "@/assets/rest/halfRest.png";
import quarterRest from "@/assets/rest/quarterRest.png";
import eightRest from "@/assets/rest/eightRest.png";
import sixteenthRest from "@/assets/rest/sixteenthRest.png";

const StyledClef = styled("div")`
  display: flex;
`;

interface Props {
  data: ClefData;
  clef: ClefType;
  staffID: number;
  style?: React.CSSProperties;
}

const getCursor = (toolData: ToolData | null) => {
  if (!toolData) {
    return null;
  }
  const restImageMap: NoteCursorMap = {
    1: {
      image: wholeRest,
      x: "7",
      y: "7",
    },
    2: {
      image: halfRest,
      x: "8",
      y: "36",
    },
    4: {
      image: quarterRest,
      x: "8",
      y: "36",
    },
    8: {
      image: eightRest,
      x: "8",
      y: "36",
    },
    16: {
      image: sixteenthRest,
      x: "8",
      y: "36",
    },
  };
  const noteImageMap: NoteCursorMap = {
    1: {
      image: wholeNote,
      x: "7",
      y: "7",
    },
    2: {
      image: halfNote,
      x: "8",
      y: "36",
    },
    4: {
      image: quarterNote,
      x: "8",
      y: "36",
    },
    8: {
      image: eightNote,
      x: "8",
      y: "36",
    },
    16: {
      image: sixteenthNote,
      x: "8",
      y: "36",
    },
  };
  if (toolData.type === "note" && noteImageMap[toolData.length]) {
    return noteImageMap[toolData.length];
  }

  if (toolData.type === "rest" && restImageMap[toolData.length]) {
    return restImageMap[toolData.length];
  }
  return null;
};

const Clef = ({ clef, data, style, staffID }: Props) => {
  const { bars } = data;
  const { activeTool } = useContext(AppContext);
  const cursor = getCursor(activeTool);
  return (
    <StyledClef
      style={{
        cursor: activeTool
          ? `url(${cursor?.image}) ${cursor?.x} ${cursor?.y}, auto`
          : "default",
        ...style,
      }}
      data-component-name="clef"
    >
      <BarSignature clef={clef} />
      {bars && bars.length
        ? bars.map((bar, i) => {
            return (
              <Bar staffID={staffID} barID={i} data={bar} key={i} clef={clef} />
            );
          })
        : null}
    </StyledClef>
  );
};

export default Clef;
