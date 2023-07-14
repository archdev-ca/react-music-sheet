export interface SheetData {
  staves: StaffData[];
}

export interface StaffData {
  bpm: number;
  beat: number;
  treble: ClefData;
  bass: ClefData;
}

export interface ClefData {
  type: ClefType;
  bars: BarData[];
}

export type ClefType = "treble" | "bass";

export interface BarData {
  notes: NoteData[];
}

export interface NoteData {
  type: string;
  accidental: boolean;
}

export interface BeatData {
  type: "note" | "rest";
  note: "a" | "b" | "c" | "d" | "e" | "f" | "g";
  pitch: number;
}

export interface NoteData {}

export interface BarSpaceData {
  line?: boolean;
  space?: boolean;
  floating?: boolean;
  note: string;
}
