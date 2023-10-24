export interface NoteImageMap {
  [key: number]: {
    width: string;
    height: string;
    image: string;
  };
}

export interface NoteCursorMap {
  [key: number]: {
    x: string;
    y: string;
    image: string;
  };
}

export interface BeatImage {
  src: string;
  width: string;
  height: string;
}

export interface BeatImageMap {
  rest: {
    [key: number]: BeatImage;
  };
  note: {
    [key: number]: BeatImage;
  };
}
