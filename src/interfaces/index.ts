export interface ISheet {
  staves: IStaff[];
}

export interface IStaff {
  bpm: number;
  beat: number;
  treble: IClef;
  bass: IClef;
}

export interface IClef {
  type: IClefType;
  bars: IBar[];
}

export type IClefType = "treble" | "bass";

export interface IBar {
  notes: INote[];
}

export interface INote {
  type: string;
  accidental: boolean;
}

export interface IBeat {}

export interface INoteData {}
