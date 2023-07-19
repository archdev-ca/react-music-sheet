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
            length: 1,
            notes: [
              {
                note: "g",
                variation: 4,
              },
              {
                note: "a",
                variation: 4,
              },
            ],
          },
        ],
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
  const [timeSignature, setTimeSignature] =
    useState<TimeSignatureInterface | null>({
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
