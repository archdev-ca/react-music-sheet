import * as React from "react";
import { SheetData, SheetRowInterface, StaffData } from "@/interfaces";
import {
  SignatureInterface,
  TimeSignatureInterface,
} from "@/interfaces/common";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  sheetData: SheetRowInterface;
  setSheetData: Dispatch<SetStateAction<SheetRowInterface>>;
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
  staves: [DEFAULT_CLEF_DATA],
};

const SheetContext = createContext<Context>({
  sheetData: {
    title: "",
    author: "",
    sheetData: INITIAL_SHEET_DATA,
  },
  setSheetData: () => undefined,
  timeSignature: {
    beatsPerBar: 3,
    beat: 8,
  },
  setTimeSignature: () => undefined,
  signature: {},
  setSignature: () => undefined,
  DEFAULT_CLEF_DATA,
});

const SheetContextProvider = ({ children }: Props) => {
  const [signature, setSignature] = useState<SignatureInterface>({});
  const [timeSignature, setTimeSignature] = useState<TimeSignatureInterface>({
    beatsPerBar: 3,
    beat: 8,
  });
  const [sheetData, setSheetData] = useState<SheetRowInterface>({
    title: "",
    author: "",
    sheetData: INITIAL_SHEET_DATA,
  });

  return (
    <SheetContext.Provider
      value={{
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
    </SheetContext.Provider>
  );
};

export { SheetContext, SheetContextProvider };
