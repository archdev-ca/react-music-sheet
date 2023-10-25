import { SheetData, SheetRowInterface } from ".";

export interface AppStoreInterface {
  titles: SheetRowInterface[];
  setTitles: (data: SheetRowInterface[]) => void;
}

export interface SheetStoreInterface {
  data: {
    title: string;
    author: string;
    timeSignature?: string;
    sheetData: SheetData;
  };
  setData: (data: SheetStoreInterface["data"]) => void;
}
