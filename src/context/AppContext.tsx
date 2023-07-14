import { SheetData, StaffData } from "@/interfaces";
import {
  SignatureInterface,
  TimeSignatureInterface,
} from "@/interfaces/common";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  sheetData: SheetData;
  setSheetData: Dispatch<SetStateAction<SheetData>>;
  activeNote: number | null;
  setActiveNote: Dispatch<SetStateAction<number | null>>;
  timeSignature: TimeSignatureInterface | null;
  setTimeSignature: Dispatch<SetStateAction<TimeSignatureInterface | null>>;
  signature: SignatureInterface;
  setSignature: Dispatch<SetStateAction<SignatureInterface>>;
}

const DEFAULT_CLEF_DATA: StaffData = {
  treble: {
    bars: [
      {
        beats: [
          {
            type: "note",
            note: "c",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "e",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "g",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 4,
            length: 1,
          },
          {
            type: "note",
            note: "c",
            variation: 5,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 5,
            length: 1,
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            note: "e",
            variation: 5,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 5,
            length: 1,
          },
          {
            type: "note",
            note: "g",
            variation: 5,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 5,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 5,
            length: 1,
          },
          {
            type: "note",
            note: "c",
            variation: 6,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 6,
            length: 1,
          },
          {
            type: "note",
            note: "e",
            variation: 6,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 6,
            length: 1,
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            note: "g",
            variation: 6,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 6,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 6,
            length: 1,
          },
          {
            type: "note",
            note: "c",
            variation: 7,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 7,
            length: 1,
          },
          {
            type: "note",
            note: "e",
            variation: 7,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 7,
            length: 1,
          },
          {
            type: "note",
            note: "g",
            variation: 7,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 7,
            length: 1,
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            note: "b",
            variation: 7,
            length: 1,
          },
          {
            type: "note",
            note: "c",
            variation: 8,
            length: 1,
          },
        ],
      },
    ],
  },
  bass: {
    bars: [
      {
        beats: [
          {
            type: "note",
            note: "a",
            variation: 0,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 0,
            length: 1,
          },
          {
            type: "note",
            note: "c",
            variation: 1,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 1,
            length: 1,
          },
          {
            type: "note",
            note: "e",
            variation: 1,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 1,
            length: 1,
          },
          {
            type: "note",
            note: "g",
            variation: 1,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 1,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 1,
            length: 1,
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            note: "c",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "e",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "g",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 2,
            length: 1,
          },
          {
            type: "note",
            note: "c",
            variation: 3,
            length: 1,
          },
          {
            type: "note",
            note: "d",
            variation: 3,
            length: 1,
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            note: "e",
            variation: 3,
            length: 1,
          },
          {
            type: "note",
            note: "f",
            variation: 3,
            length: 1,
          },
          {
            type: "note",
            note: "g",
            variation: 3,
            length: 1,
          },
          {
            type: "note",
            note: "a",
            variation: 3,
            length: 1,
          },
          {
            type: "note",
            note: "b",
            variation: 3,
            length: 1,
          },
        ],
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

const AppContext = createContext<Context>({});

const AppContextProvider = ({ children }: Props) => {
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [signature, setSignature] = useState<SignatureInterface>({});
  const [timeSignature, setTimeSignature] =
    useState<TimeSignatureInterface | null>({
      bpm: 4,
      beat: 4,
    });
  const [sheetData, setSheetData] = useState<SheetData>(INITIAL_SHEET_DATA);

  return (
    <AppContext.Provider
      value={{
        activeNote,
        setActiveNote,
        signature,
        setSignature,
        sheetData,
        setSheetData,
        timeSignature,
        setTimeSignature,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
