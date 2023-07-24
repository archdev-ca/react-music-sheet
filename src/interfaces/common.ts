import { BeatType } from ".";

export type Clef = "bass" | "treble";

export interface TimeSignatureInterface {
  beatsPerBar: number;
  beat: number;
}

export interface SignatureInterface {}

export interface BeatPos {
  bottom: number;
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
