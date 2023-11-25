import { SheetData, SheetRowInterface } from ".";

export interface AppStoreInterface {
  titles: SheetRowInterface[];
  setTitles: (data: SheetRowInterface[]) => void;
}

export interface SheetStoreInterface {
  title: string;
  author: string;
  timeSignature?: {
    beatsPerBar: number;
    wholeBeatNote: number;
  };
  sheetData: SheetData;
}
