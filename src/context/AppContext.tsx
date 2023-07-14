import { SheetData } from "@/interfaces";
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

const DEFAULT_CLEF_DATA = {
  treble: {
    bars: [
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
    ],
  },
};

const INITIAL_SHEET_DATA = {
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
