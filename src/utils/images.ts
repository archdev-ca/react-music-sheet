import wholeNote from "@/assets/notes/whole.png";
import halfNote from "@/assets/notes/half.png";
import quarterNote from "@/assets/notes/quarter.png";
import eightNote from "@/assets/notes/eighth.png";
import sixteenthNote from "@/assets/notes/sixteenth.png";
import { NoteImageMap } from "@/interfaces/images";

export const getNoteImage = (note: string) => {
  const noteImageMap: NoteImageMap = {
    1: {
      image: wholeNote,
      width: "auto",
      height: "10px",
    },
    2: {
      image: halfNote,
      width: "auto",
      height: "28px",
    },
    4: {
      image: quarterNote,
      width: "auto",
      height: "28px",
    },
    8: {
      image: eightNote,
      width: "auto",
      height: "28px",
    },
    16: {
      image: sixteenthNote,
      width: "auto",
      height: "28px",
    },
  };
  if (noteImageMap[note]) {
    return;
    <img
      src={noteImageMap[note].image}
      alt=""
      width={noteImageMap[note].width}
      height={noteImageMap[note].height}
    />;
  }
  return null;
};
