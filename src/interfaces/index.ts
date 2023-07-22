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

export type BeatType = "note" | "rest";
export interface BeatData {
  type: BeatType;
  length: number;
  notes?: NoteData[];
}

export interface BarSpaceData {
  line?: boolean;
  space?: boolean;
  floating?: boolean;
  note: NoteType;
  variation: number;
}

export interface NoteData {
  note: NoteType;
  sharp?: boolean;
  variation: number;
}

export type NoteType = "a" | "b" | "c" | "d" | "e" | "f" | "g";

export interface ToneData {
  toneID: string;
  timeout: number;
}
