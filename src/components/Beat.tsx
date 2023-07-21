import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { BeatData, BeatType, ClefType, NoteData, NoteType } from "@/interfaces";
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
      "1": { bottom: "15px" },
      "2": { bottom: "74px" },
      "3": { bottom: "134px" },
      "4": { bottom: "-2px" },
      "5": { bottom: "57px" },
      "6": { bottom: "117px" },
      "7": { bottom: "176px" },
      "8": { bottom: "236px" },
    },
    d: {
      "1": { bottom: "23px" },
      "2": { bottom: "83px" },
      "3": { bottom: "142px" },
      "4": { bottom: "6px" },
      "5": { bottom: "66px" },
      "6": { bottom: "125px" },
      "7": { bottom: "185px" },
    },
    e: {
      "1": { bottom: "32px" },
      "2": { bottom: "91px" },
      "3": { bottom: "151px" },
      "4": { bottom: "15px" },
      "5": { bottom: "74px" },
      "6": { bottom: "134px" },
      "7": { bottom: "193px" },
    },
    f: {
      "1": { bottom: "40px" },
      "2": { bottom: "100px" },
      "3": { bottom: "159px" },
      "4": { bottom: "23px" },
      "5": { bottom: "83px" },
      "6": { bottom: "142px" },
      "7": { bottom: "202px" },
    },
    g: {
      "1": { bottom: "49px" },
      "2": { bottom: "108px" },
      "3": { bottom: "168px" },
      "4": { bottom: "32px" },
      "5": { bottom: "91px" },
      "6": { bottom: "151px" },
      "7": { bottom: "210px" },
    },
    a: {
      "0": { bottom: "-2px" },
      "1": { bottom: "57px" },
      "2": { bottom: "117px" },
      "3": { bottom: "176px" },
      "4": { bottom: "40px" },
      "5": { bottom: "100px" },
      "6": { bottom: "159px" },
      "7": { bottom: "219px" },
    },
    b: {
      "0": { bottom: "6px" },
      "1": { bottom: "66px" },
      "2": { bottom: "125px" },
      "3": { bottom: "185px" },
      "4": { bottom: "49px" },
      "5": { bottom: "108px" },
      "6": { bottom: "168px" },
      "7": { bottom: "228px" },
    },
  };

  if (type === "rest") {
    return { bottom: clef === "treble" ? 0 : "145px" };
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
                  bottom: beatPos.bottom,
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
