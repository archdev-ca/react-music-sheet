import { NoteImageMap } from "@/interfaces/images";
import React from "react";

type Props = {};

const useGetNoteImage = (props: Props) => {
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
      return (
        <img
          src={noteImageMap[note]["image"]}
          width={noteImageMap[note]["width"]}
          height={noteImageMap[note]["height"]}
        />
      );
    }
    return null;
  };

  return <div>useGetNoteImage</div>;
};

export default useGetNoteImage;
