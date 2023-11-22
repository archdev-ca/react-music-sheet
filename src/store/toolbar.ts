import { ToolbarAtomInterface } from "@/interfaces/toolbar";
import { atom } from "jotai";

export const toolbarAtom = atom<ToolbarAtomInterface>({
  selectedTool: null,
});
