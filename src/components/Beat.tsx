import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { BeatData } from "@/interfaces";
import { BeatImageMap } from "@/interfaces/images";

import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import { styled } from "@mui/joy";
import { BeatPos, BeatPosMap } from "@/interfaces/common";

type Props = {
  data: BeatData;
};

const BeatImage = styled("img")`
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
`;
const BeatContainer = styled("div")`
  position: relative;
  height: 100%;
  flex-grow: 1;
`;

const getBeatPosition = (
  type: BeatData["type"],
  note: BeatData["note"],
  variation: BeatData["variation"]
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
  // beatPosMap["c"]["4"] = { bottom: "-2px" };
  // beatPosMap["d"]["4"] = { bottom: "6px" };
  // beatPosMap["e"]["4"] = { bottom: "15px" };
  // beatPosMap["f"]["4"] = { bottom: "23px" };
  // beatPosMap["g"]["4"] = { bottom: "32px" };
  // beatPosMap["a"]["4"] = { bottom: "40px" };
  // beatPosMap["b"]["4"] = { bottom: "49px" };
  // beatPosMap["c"]["5"] = { bottom: "57px" };
  // beatPosMap["d"]["5"] = { bottom: "66px" };
  // beatPosMap["e"]["5"] = { bottom: "74px" };
  // beatPosMap["f"]["5"] = { bottom: "83px" };
  // beatPosMap["g"]["5"] = { bottom: "91px" };
  // beatPosMap["a"]["5"] = { bottom: "100px" };
  // beatPosMap["b"]["5"] = { bottom: "108px" };
  // beatPosMap["c"]["6"] = { bottom: "117px" };
  // beatPosMap["d"]["6"] = { bottom: "125px" };
  // beatPosMap["e"]["6"] = { bottom: "134px" };
  // beatPosMap["f"]["6"] = { bottom: "142px" };
  // beatPosMap["g"]["6"] = { bottom: "151px" };
  // beatPosMap["a"]["6"] = { bottom: "159px" };
  // beatPosMap["b"]["6"] = { bottom: "168px" };
  // beatPosMap["c"]["7"] = { bottom: "176px" };
  // beatPosMap["d"]["7"] = { bottom: "185px" };
  // beatPosMap["e"]["7"] = { bottom: "193px" };
  // beatPosMap["f"]["7"] = { bottom: "202px" };
  // beatPosMap["g"]["7"] = { bottom: "210px" };
  // beatPosMap["a"]["7"] = { bottom: "219px" };
  // beatPosMap["b"]["7"] = { bottom: "228px" };
  // beatPosMap["c"]["8"] = { bottom: "236px" };
  // beatPosMap["a"]["0"] = { bottom: "-2px" };
  // beatPosMap["b"]["0"] = { bottom: "6px" };
  // beatPosMap["c"]["1"] = { bottom: "15px" };
  // beatPosMap["d"]["1"] = { bottom: "23px" };
  // beatPosMap["e"]["1"] = { bottom: "32px" };
  // beatPosMap["f"]["1"] = { bottom: "40px" };
  // beatPosMap["g"]["1"] = { bottom: "49px" };
  // beatPosMap["a"]["1"] = { bottom: "57px" };
  // beatPosMap["b"]["1"] = { bottom: "66px" };
  // beatPosMap["c"]["2"] = { bottom: "74px" };
  // beatPosMap["d"]["2"] = { bottom: "83px" };
  // beatPosMap["e"]["2"] = { bottom: "91px" };
  // beatPosMap["f"]["2"] = { bottom: "100px" };
  // beatPosMap["g"]["2"] = { bottom: "108px" };
  // beatPosMap["a"]["2"] = { bottom: "117px" };
  // beatPosMap["b"]["2"] = { bottom: "125px" };
  // beatPosMap["c"]["3"] = { bottom: "134px" };
  // beatPosMap["d"]["3"] = { bottom: "142px" };
  // beatPosMap["e"]["3"] = { bottom: "151px" };
  // beatPosMap["f"]["3"] = { bottom: "159px" };
  // beatPosMap["g"]["3"] = { bottom: "168px" };
  // beatPosMap["a"]["3"] = { bottom: "176px" };
  // beatPosMap["b"]["3"] = { bottom: "185px" };

  if (type === "rest") {
    return { bottom: 0 };
  }
  if (type === "note" && beatPosMap?.[note]?.[variation]) {
    return beatPosMap?.[note]?.[variation];
  }
  return { bottom: 0 };
};

const getBeatImage = (
  type: BeatData["type"],
  length: number,
  note: BeatData["note"],
  variation: BeatData["variation"]
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
  if (imgMap?.[type]?.[length]) {
    const beatPos = getBeatPosition(type, note, variation);
    return (
      <BeatImage
        style={{
          bottom: beatPos.bottom,
        }}
        src={imgMap?.[type]?.[length].src}
        alt=""
      />
    );
  }
  return null;
};

const Beat = ({ data }: Props) => {
  const { sheetData } = useContext(AppContext);
  const { length, type, note, variation } = data;
  return (
    <BeatContainer>{getBeatImage(type, length, note, variation)}</BeatContainer>
  );
};

export default Beat;
