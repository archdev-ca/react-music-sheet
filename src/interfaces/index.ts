export type SheetData = {
  staves: StaffData[];
};

export interface StaffData {
  treble: ClefData;
  bass: ClefData;
}

export interface ClefData {
  bars: BarData[];
}

export type ClefType = "treble" | "bass";

export interface BarData {
  beats: BeatData[];
}

export interface BeatData {
  type: "note" | "rest";
  note: "a" | "b" | "c" | "d" | "e" | "f" | "g";
  length: number;
  variation: number;
  sharp?: boolean;
}

export interface BarSpaceData {
  line?: boolean;
  space?: boolean;
  floating?: boolean;
  note: BeatData["note"];
  variation: BeatData["variation"];
}
