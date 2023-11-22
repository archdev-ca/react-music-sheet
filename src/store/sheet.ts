import { StaffData, SheetData } from "@/interfaces";
import { SheetStoreInterface } from "@/interfaces/store";
import { atom } from "jotai";

const DEFAULT_CLEF_DATA: StaffData = {
  treble: {
    bars: [
      {
        beats: [],
      },
      {
        beats: [],
      },
      {
        beats: [],
      },
      {
        beats: [],
      },
    ],
  },
  bass: {
    bars: [
      {
        beats: [],
      },
      {
        beats: [],
      },
      {
        beats: [],
      },
      {
        beats: [],
      },
    ],
  },
};

const INITIAL_SHEET_DATA: SheetData = {
  staves: [DEFAULT_CLEF_DATA],
};

export const sheetAtom = atom<SheetStoreInterface>({
  title: "",
  author: "",
  timeSignature: "",
  sheetData: INITIAL_SHEET_DATA,
});
