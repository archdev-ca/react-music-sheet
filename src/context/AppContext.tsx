import { createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

const AppContext = createContext({});

const AppContextProvider = ({ children }: Props) => {
  const [activeNote, setActiveNote] = useState(null);
  const [signature, setSignature] = useState("4/4");
  return (
    <AppContext.Provider
      value={{
        activeNote,
        setActiveNote,
        signature,
        setSignature,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
