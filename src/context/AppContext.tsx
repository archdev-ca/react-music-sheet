import { ITimeSignature } from "@/interfaces/common";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  noteData: string;
  activeNote: number | null;
  setActiveNote: Dispatch<SetStateAction<number | null>>;
  timeSignature: ITimeSignature | null;
  setTimeSignature: Dispatch<SetStateAction<ITimeSignature | null>>;
}

const INITIAL_STAFF_DATA = {
  clefs: {
    treble: {
      bars: [
        {
          notes: [],
        },
      ],
    },
    bass: {
      bars: [
        {
          notes: [],
        },
      ],
    },
  },
};

const AppContext = createContext<Context>({});

const AppContextProvider = ({ children }: Props) => {
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [signature, setSignature] = useState({});
  const [timeSignature, setTimeSignature] = useState<ITimeSignature | null>({
    bpm: 4,
    beat: 4,
  });
  const [noteData, setNoteData] = useState({
    staves: [{ ...INITIAL_STAFF_DATA }],
  });

  return (
    <AppContext.Provider
      value={{
        activeNote,
        setActiveNote,
        signature,
        setSignature,
        noteData,
        setNoteData,
        timeSignature,
        setTimeSignature,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
