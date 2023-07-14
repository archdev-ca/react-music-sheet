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
      1: {
        bottom: "15px",
      },
      2: {
        bottom: "74px",
      },
      3: {
        bottom: "134px",
      },
      4: {
        bottom: "193px",
      },
      5: {
        bottom: "253px",
      },
    },
    d: {
      1: {
        bottom: "23px",
      },
      2: {
        bottom: "83px",
      },
      3: {
        bottom: "142px",
      },
      4: {
        bottom: "202px",
      },
    },
    e: {
      1: {
        bottom: "32px",
      },
      2: {
        bottom: "91px",
      },
      3: {
        bottom: "151px",
      },
      4: {
        bottom: "210px",
      },
    },
    f: {
      1: {
        bottom: "40px",
      },
      2: {
        bottom: "100px",
      },
      3: {
        bottom: "159px",
      },
      4: {
        bottom: "219px",
      },
    },
    g: {
      1: {
        bottom: "49px",
      },
      2: {
        bottom: "108px",
      },
      3: {
        bottom: "168px",
      },
      4: {
        bottom: "228px",
      },
    },
    a: {
      0: {
        bottom: "-2px",
      },
      1: {
        bottom: "57px",
      },
      2: {
        bottom: "117px",
      },
      3: {
        bottom: "176px",
      },
      4: {
        bottom: "236px",
      },
    },
    b: {
      0: {
        bottom: "6px",
      },
      1: {
        bottom: "66px",
      },
      2: {
        bottom: "125px",
      },
      3: {
        bottom: "185px",
      },
      4: {
        bottom: "245px",
      },
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
