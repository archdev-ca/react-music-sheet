import { createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

const AppContext = createContext();

const AppContextProvider = ({ children }: Props) => {
  const [activeNote, setActiveNote] = useState(null);
  return (
    <AppContext.Provider value={{ activeNote, setActiveNote }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
