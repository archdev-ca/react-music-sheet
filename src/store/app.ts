import { SheetRowInterface } from "@/interfaces";
import { create } from "zustand";

const useAppStore = create((set) => ({
  titles: [],
  setTitles: (data: SheetRowInterface[]) => set(() => ({ titles: data })),
}));

export default useAppStore;
