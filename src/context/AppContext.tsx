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
  DEFAULT_CLEF_DATA: StaffData;
}

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
  // staves: [DEFAULT_CLEF_DATA],
  staves: [
    {
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
              {
                type: "rest",
                length: 16,
                notes: [{ note: "b", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "c", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 4 }],
              },
            ],
          },
          {
            beats: [
              {
                type: "note",
                length: 8,
                notes: [{ note: "b", variation: 4 }],
              },
              {
                type: "rest",
                length: 16,
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "g", variation: 4, sharp: true }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "b", variation: 4 }],
              },
            ],
          },
        ],
      },
      bass: {
        bars: [
          { beats: [{ type: "rest", length: 8 }] },
          {
            beats: [
              {
                type: "rest",
                length: 2,
              },
            ],
          },
          {
            beats: [
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 2 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 3 }],
              },
              {
                type: "rest",
                length: 16,
              },
              {
                type: "rest",
                length: 8,
              },
            ],
          },
          {
            beats: [
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 2 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "g", variation: 3, sharp: true }],
              },
              {
                type: "rest",
                length: 16,
              },
              {
                type: "rest",
                length: 8,
              },
            ],
          },
        ],
      },
    },
    {
      treble: {
        bars: [
          {
            beats: [
              {
                type: "note",
                length: 8,
                notes: [{ note: "c", variation: 5 }],
              },
              {
                type: "rest",
                length: 16,
                notes: [{ note: "c", variation: 5 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 4 }],
              },
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
              {
                type: "rest",
                length: 16,
                notes: [{ note: "a", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "c", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 4 }],
              },
            ],
          },
          {
            beats: [
              {
                type: "note",
                length: 8,
                notes: [{ note: "b", variation: 4 }],
              },
              {
                type: "rest",
                length: 16,
                notes: [{ note: "a", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "d", variation: 4 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "c", variation: 5 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "b", variation: 4 }],
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
                length: 16,
                notes: [{ note: "a", variation: 2 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 3 }],
              },
              {
                type: "rest",
                length: 16,
                notes: [{ note: "d", variation: 3 }],
              },
              {
                type: "rest",
                length: 8,
                notes: [{ note: "c", variation: 3 }],
              },
            ],
          },
          {
            beats: [
              {
                type: "rest",
                length: 2,
                notes: [{ note: "d", variation: 3 }],
              },
            ],
          },
          {
            beats: [
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 2 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 3 }],
              },
              {
                type: "rest",
                length: 16,
                notes: [{ note: "d", variation: 3 }],
              },
              {
                type: "rest",
                length: 8,
                notes: [{ note: "c", variation: 3 }],
              },
            ],
          },
          {
            beats: [
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 2 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "g", variation: 3, sharp: true }],
              },
              {
                type: "rest",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "rest",
                length: 8,
                notes: [{ note: "d", variation: 3 }],
              },
            ],
          },
        ],
      },
    },
    {
      treble: {
        bars: [
          {
            beats: [
              {
                type: "note",
                length: 4,
                notes: [{ note: "a", variation: 4 }],
              },
            ],
          },
          { beats: [] },
          { beats: [] },
          { beats: [] },
        ],
      },
      bass: {
        bars: [
          {
            beats: [
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 2 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "e", variation: 3 }],
              },
              {
                type: "note",
                length: 16,
                notes: [{ note: "a", variation: 3 }],
              },
              {
                type: "rest",
                length: 16,
                notes: [{ note: "d", variation: 3 }],
              },
            ],
          },
          { beats: [] },
          { beats: [] },
          { beats: [] },
        ],
      },
    },
  ],
};

const AppContext = createContext<Context>({
  sheetData: INITIAL_SHEET_DATA,
  setSheetData: () => {},
  activeTool: null,
  setActiveTool: () => {},
  timeSignature: {
    beatsPerBar: 3,
    beat: 8,
  },
  setTimeSignature: () => {},
  signature: {},
  setSignature: () => {},
  DEFAULT_CLEF_DATA,
});

const AppContextProvider = ({ children }: Props) => {
  const [activeTool, setActiveTool] = useState<ToolData | null>(null);
  const [signature, setSignature] = useState<SignatureInterface>({});
  const [timeSignature, setTimeSignature] = useState<TimeSignatureInterface>({
    beatsPerBar: 3,
    beat: 8,
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
        DEFAULT_CLEF_DATA,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
