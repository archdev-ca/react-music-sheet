import { SelectedSymbolInterface } from "@/interfaces";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  selectedSymbol: SelectedSymbolInterface | null;
  setSelectedSymbol: Dispatch<SetStateAction<SelectedSymbolInterface | null>>;
}

const SelectionContext = createContext<Context>({
  selectedSymbol: null,
  setSelectedSymbol: () => {},
});

const SelectionContextProvider = ({ children }: Props) => {
  const [selectedSymbol, setSelectedSymbol] =
    useState<SelectedSymbolInterface | null>(null);

  return (
    <SelectionContext.Provider
      value={{
        setSelectedSymbol,
        selectedSymbol,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export { SelectionContext, SelectionContextProvider };
