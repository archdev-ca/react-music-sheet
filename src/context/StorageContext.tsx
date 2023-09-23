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
}

const StorageContext = createContext<Context>({});

const SheetContextProvider = ({ children }: Props) => {
  return (
    <StorageContext.Provider value={{}}>{children}</StorageContext.Provider>
  );
};

export { StorageContext, SheetContextProvider };
