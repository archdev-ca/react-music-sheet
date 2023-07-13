import { createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
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

const AppContext = createContext({});

const AppContextProvider = ({ children }: Props) => {
  const [activeNote, setActiveNote] = useState(null);
  const [signature, setSignature] = useState({});
  const [timeSignature, setTimeSignature] = useState("4/4");
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
