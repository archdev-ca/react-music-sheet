import { SheetData, StaffData } from "@/interfaces";
import {
  SignatureInterface,
  TimeSignatureInterface,
  ToolData,
} from "@/interfaces/common";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  sheetData: SheetData;
  setSheetData: Dispatch<SetStateAction<SheetData>>;
  activeTool: ToolData | null;
  setActiveTool: Dispatch<SetStateAction<ToolData | null>>;
  timeSignature: TimeSignatureInterface;
  setTimeSignature: Dispatch<SetStateAction<TimeSignatureInterface>>;
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
            length: 16,
            notes: [{ note: "e", variation: 5 }],
          },
          {
            type: "note",
            length: 16,
            notes: [{ note: "d", variation: 5, sharp: true }],
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            length: 16,
            notes: [{ note: "e", variation: 5 }],
          },
          {
            type: "note",
            length: 16,
            notes: [{ note: "d", variation: 5, sharp: true }],
          },
          {
            type: "note",
            length: 16,
            notes: [{ note: "e", variation: 5 }],
          },
          {
            type: "note",
            length: 16,
            notes: [{ note: "b", variation: 4 }],
          },
          {
            type: "note",
            length: 16,
            notes: [{ note: "d", variation: 5 }],
          },
          {
            type: "note",
            length: 16,
            notes: [{ note: "c", variation: 5 }],
          },
        ],
      },
      {
        beats: [
          {
            type: "note",
            length: 8,
            notes: [{ note: "a", variation: 4 }],
          },
        ],
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

const AppContext = createContext<Context>({
  sheetData: INITIAL_SHEET_DATA,
  setSheetData: () => {},
  activeTool: null,
  setActiveTool: () => {},
  timeSignature: {
    bpm: 4,
    beat: 4,
  },
  setTimeSignature: () => {},
  signature: {},
  setSignature: () => {},
});

const AppContextProvider = ({ children }: Props) => {
  const [activeTool, setActiveTool] = useState<ToolData | null>(null);
  const [signature, setSignature] = useState<SignatureInterface>({});
  const [timeSignature, setTimeSignature] = useState<TimeSignatureInterface>({
    bpm: 4,
    beat: 4,
  });
  const [sheetData, setSheetData] = useState<SheetData>(INITIAL_SHEET_DATA);

  return (
    <AppContext.Provider
      value={{
        activeTool,
        setActiveTool,
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
