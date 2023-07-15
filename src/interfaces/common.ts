import { BeatType } from ".";

export type Clef = "bass" | "treble";

export interface TimeSignatureInterface {
  bpm: number;
  beat: number;
}

export interface SignatureInterface {}

export interface BeatPos {
  bottom: string | number;
}
export interface BeatPosMap {
  [key: string]: {
    [key: string]: BeatPos;
  };
}

export interface ToolData {
  type: BeatType;
  length: number;
}
