import { SheetRowInterface } from "@/interfaces";
import { AppStoreInterface } from "@/interfaces/store";
import { create } from "zustand";

const useAppStore = create<AppStoreInterface>((set) => ({
  titles: [],
  setTitles: (data: SheetRowInterface[]) => set(() => ({ titles: data })),
}));

export default useAppStore;
