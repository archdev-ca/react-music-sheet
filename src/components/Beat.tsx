import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { BeatData, BeatType, ClefType, NoteType } from "@/interfaces";
import { BeatImageMap } from "@/interfaces/images";

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
import sharp from "@/assets/sharp.png";
import { styled } from "@mui/joy";
import { BeatPos, BeatPosMap } from "@/interfaces/common";

type Props = {
  data: BeatData;
  type: BeatType;
  length: number;
  clef: ClefType;
};

const BeatImage = styled("img")`
  display: block;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 2;
  max-width: 100%;
  transform: translateY(2px);
`;
const BeatContainer = styled("div")`
  box-sizing: border-box;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 4px;
  width: 34px;
`;

const Accidental = styled("span")`
  position: absolute;
  bottom: 5px;
`;

const getBeatPosition = (
  type: BeatType,
  clef?: ClefType,
  note?: NoteType,
  variation?: number
): BeatPos => {
  const beatPosMap: BeatPosMap = {
    c: {
      "1": { bottom: 15 },
      "2": { bottom: 74 },
      "3": { bottom: 134 },
      "4": { bottom: -6 },
      "5": { bottom: 57 },
      "6": { bottom: 117 },
      "7": { bottom: 176 },
      "8": { bottom: 236 },
    },
    d: {
      "1": { bottom: 23 },
      "2": { bottom: 83 },
      "3": { bottom: 142 },
      "4": { bottom: 6 },
      "5": { bottom: 66 },
      "6": { bottom: 125 },
      "7": { bottom: 185 },
    },
    e: {
      "1": { bottom: 32 },
      "2": { bottom: 91 },
      "3": { bottom: 151 },
      "4": { bottom: 15 },
      "5": { bottom: 74 },
      "6": { bottom: 134 },
      "7": { bottom: 193 },
    },
    f: {
      "1": { bottom: 40 },
      "2": { bottom: 100 },
      "3": { bottom: 159 },
      "4": { bottom: 23 },
      "5": { bottom: 83 },
      "6": { bottom: 142 },
      "7": { bottom: 202 },
    },
    g: {
      "1": { bottom: 49 },
      "2": { bottom: 108 },
      "3": { bottom: 168 },
      "4": { bottom: 32 },
      "5": { bottom: 91 },
      "6": { bottom: 151 },
      "7": { bottom: 210 },
    },
    a: {
      "0": { bottom: -2 },
      "1": { bottom: 57 },
      "2": { bottom: 117 },
      "3": { bottom: 176 },
      "4": { bottom: 40 },
      "5": { bottom: 100 },
      "6": { bottom: 159 },
      "7": { bottom: 219 },
    },
    b: {
      "0": { bottom: 6 },
      "1": { bottom: 66 },
      "2": { bottom: 125 },
      "3": { bottom: 185 },
      "4": { bottom: 49 },
      "5": { bottom: 108 },
      "6": { bottom: 168 },
      "7": { bottom: 228 },
    },
  };

  if (type === "rest") {
    return { bottom: clef === "treble" ? 0 : 145 };
  }
  if (type === "note" && note && variation && beatPosMap?.[note]?.[variation]) {
    return beatPosMap?.[note]?.[variation];
  }
  return { bottom: 0 };
};

const getRestPosition = (clef: ClefType, length: number) => {
  const offset = clef === "treble" ? 95 : 0;
  const restPosMap: Record<string, number> = {
    "1": 145,
    "2": 145,
    "8": 132,
    "4": 132,
    "16": 132,
  };
  if (length && restPosMap[length]) {
    return {
      bottom: `${restPosMap[length] - offset}px`,
    };
  }
  return {
    bottom: 0,
  };
};

const getNoteImage = (
  type: BeatType,
  length: number,
  note?: NoteType,
  variation?: number
) => {
  const imgMap: BeatImageMap = {
    rest: {
      1: {
        src: wholeRest,
        width: "auto",
        height: "auto",
      },
      2: {
        src: halfRest,
        width: "auto",
        height: "auto",
      },
      4: {
        src: quarterRest,
        width: "auto",
        height: "24px",
      },
      8: {
        src: eightRest,
        width: "auto",
        height: "24px",
      },
      16: {
        src: sixteenthRest,
        width: "auto",
        height: "24px",
      },
    },
    note: {
      1: {
        src: wholeNote,
        width: "auto",
        height: "10px",
      },
      2: {
        src: halfNote,
        width: "auto",
        height: "32px",
      },
      4: {
        src: quarterNote,
        width: "auto",
        height: "32px",
      },
      8: {
        src: eightNote,
        width: "auto",
        height: "32px",
      },
      16: {
        src: sixteenthNote,
        width: "auto",
        height: "32px",
      },
    },
  };
  // console.log({ type });
  if (type === "note" && note && variation && imgMap?.[type]?.[length]) {
    return imgMap?.[type]?.[length];
  } else if (type === "rest" && imgMap?.[type]?.[length]) {
    // console.log(imgMap?.[type]?.[length]);
    return imgMap?.[type]?.[length];
  }
  return {
    src: "",
    width: "",
    height: "",
  };
};

const Beat = ({ data, clef, length, type }: Props) => {
  const { notes } = data;
  const { sheetData } = useContext(AppContext);
  const offset = clef === "treble" ? 4 : -74;
  let restPos = null;
  let restImage = null;
  if (type === "rest" && length) {
    restPos = getRestPosition(clef, length);
    restImage = getNoteImage(type, length);
  }
  return (
    <>
      {type === "rest" ? (
        <BeatContainer
          style={{
            bottom: restPos?.bottom,
          }}
        >
          <BeatImage
            width={restImage?.width}
            height={restImage?.height}
            src={restImage?.src}
            alt=""
          />
        </BeatContainer>
      ) : null}
      {type === "note" && notes && notes.length
        ? notes.map((note, i) => {
            const beatPos = getBeatPosition(
              type,
              clef,
              note.note,
              note.variation
            );
            const beatImage = getNoteImage(
              type,
              length,
              note.note,
              note.variation
            );
            return (
              <BeatContainer
                key={i}
                style={{
                  bottom: `${beatPos.bottom + offset}px`,
                }}
              >
                {note.sharp ? (
                  <Accidental>
                    <img src={sharp} alt="" height="14" />
                  </Accidental>
                ) : null}
                <BeatImage
                  width={beatImage.width}
                  height={beatImage.height}
                  src={beatImage.src}
                  alt=""
                />
              </BeatContainer>
            );
          })
        : null}
    </>
  );
};

export default Beat;
