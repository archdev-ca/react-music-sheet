import { StaffData, SheetData } from "@/interfaces";
import { SheetStoreInterface } from "@/interfaces/store";
import { create } from "zustand";

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

const useSheetStore = create<SheetStoreInterface>((set) => ({
  data: {
    title: "",
    author: "",
    timeSignature: "",
    sheetData: INITIAL_SHEET_DATA,
  },
  setData: (state: SheetStoreInterface["data"]) => set(() => ({ data: state })),
}));

export default useSheetStore;
