import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { BeatData, BeatType, NoteData, NoteType } from "@/interfaces";
import { BeatImageMap } from "@/interfaces/images";

import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import { styled } from "@mui/joy";
import { BeatPos, BeatPosMap } from "@/interfaces/common";

type Props = {
  notes: NoteData[];
  type: BeatType;
  length: number;
};

const BeatImage = styled("img")`
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
`;
const BeatContainer = styled("div")`
  position: relative;
  height: 100%;
  flex-grow: 1;
`;

const getBeatPosition = (
  type: BeatType,
  note: NoteType,
  variation: number
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
    return { bottom: 0 };
  }
  if (type === "note" && beatPosMap?.[note]?.[variation]) {
    return beatPosMap?.[note]?.[variation];
  }
  return { bottom: 0 };
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
        src: "",
      },
      2: {
        src: "",
      },
      4: {
        src: "",
      },
      8: {
        src: "",
      },
      16: {
        src: "",
      },
    },
    note: {
      1: {
        src: wholeNote,
      },
      2: {
        src: halfNote,
      },
      4: {
        src: quarterNote,
      },
      8: {
        src: eightNote,
      },
      16: {
        src: sixteenthNote,
      },
    },
  };
  if (type === "note" && note && variation && imgMap?.[type]?.[length]) {
    return imgMap?.[type]?.[length].src;
  }
  return "";
};

const Beat = ({ notes, length, type }: Props) => {
  const { sheetData } = useContext(AppContext);
  return (
    <BeatContainer>
      {type === "rest" ? getNoteImage(type, length) : null}
      {type === "note" && notes && notes.length
        ? notes.map((note, i) => {
            const beatPos = getBeatPosition(type, note.note, note.variation);
            const beatImage = getNoteImage(
              type,
              length,
              note.note,
              note.variation
            );
            return (
              <BeatImage
                key={i}
                style={{
                  bottom: beatPos.bottom,
                }}
                src={beatImage}
                alt=""
              />
            );
          })
        : null}
    </BeatContainer>
  );
};

export default Beat;
