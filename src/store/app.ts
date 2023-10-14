import { SheetRowInterface } from "@/interfaces";
import { create } from "zustand";

const INITIAL_TITLE_LIST: SheetRowInterface[] = [
  {
    title: "Fur Elise",
    author: "Ludwiig Von Beethoven",
    sheetData: {
      staves: [
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "g", variation: 4, sharp: true }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                ],
              },
            ],
          },
          bass: {
            bars: [
              { beats: [{ type: "rest", length: 8 }] },
              {
                beats: [
                  {
                    type: "rest",
                    length: 2,
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                  },
                  {
                    type: "rest",
                    length: 8,
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "g", variation: 3, sharp: true }],
                  },
                  {
                    type: "rest",
                    length: 16,
                  },
                  {
                    type: "rest",
                    length: 8,
                  },
                ],
              },
            ],
          },
        },
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "c", variation: 5 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                ],
              },
            ],
          },
          bass: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "d", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 8,
                    notes: [{ note: "c", variation: 3 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "rest",
                    length: 2,
                    notes: [{ note: "d", variation: 3 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "d", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 8,
                    notes: [{ note: "c", variation: 3 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "g", variation: 3, sharp: true }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 8,
                    notes: [{ note: "d", variation: 3 }],
                  },
                ],
              },
            ],
          },
        },
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 4,
                    notes: [{ note: "a", variation: 4 }],
                  },
                ],
              },
              { beats: [] },
              { beats: [] },
              { beats: [] },
            ],
          },
          bass: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "d", variation: 3 }],
                  },
                ],
              },
              { beats: [] },
              { beats: [] },
              { beats: [] },
            ],
          },
        },
      ],
    },
  },
  {
    title: "Kiss the Rain",
    author: "Yiruma",
    sheetData: {
      staves: [
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "g", variation: 4, sharp: true }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                ],
              },
            ],
          },
          bass: {
            bars: [
              { beats: [{ type: "rest", length: 8 }] },
              {
                beats: [
                  {
                    type: "rest",
                    length: 2,
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                  },
                  {
                    type: "rest",
                    length: 8,
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "g", variation: 3, sharp: true }],
                  },
                  {
                    type: "rest",
                    length: 16,
                  },
                  {
                    type: "rest",
                    length: 8,
                  },
                ],
              },
            ],
          },
        },
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "c", variation: 5 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 8,
                    notes: [{ note: "b", variation: 4 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "a", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 4 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "c", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "b", variation: 4 }],
                  },
                ],
              },
            ],
          },
          bass: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "d", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 8,
                    notes: [{ note: "c", variation: 3 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "rest",
                    length: 2,
                    notes: [{ note: "d", variation: 3 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "d", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 8,
                    notes: [{ note: "c", variation: 3 }],
                  },
                ],
              },
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "g", variation: 3, sharp: true }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 8,
                    notes: [{ note: "d", variation: 3 }],
                  },
                ],
              },
            ],
          },
        },
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 4,
                    notes: [{ note: "a", variation: 4 }],
                  },
                ],
              },
              { beats: [] },
              { beats: [] },
              { beats: [] },
            ],
          },
          bass: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 2 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 3 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "a", variation: 3 }],
                  },
                  {
                    type: "rest",
                    length: 16,
                    notes: [{ note: "d", variation: 3 }],
                  },
                ],
              },
              { beats: [] },
              { beats: [] },
              { beats: [] },
            ],
          },
        },
      ],
    },
  },
  {
    title: "Jesu, Joy of Man's Desiring",
    author: "J.S. Bach",
    sheetData: {
      staves: [
        {
          treble: {
            bars: [
              {
                beats: [
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "e", variation: 5 }],
                  },
                  {
                    type: "note",
                    length: 16,
                    notes: [{ note: "d", variation: 5, sharp: true }],
                  },
                ],
              },
              {
                beats: [],
              },
              {
                beats: [],
              },
              {
                beats: [],
              },
            ],
          },
          bass: {
            bars: [
              {
                beats: [],
              },
              {
                beats: [],
              },
              {
                beats: [],
              },
              {
                beats: [],
              },
            ],
          },
        },
      ],
    },
  },
];

const useAppStore = create(() => ({
  titles: INITIAL_TITLE_LIST,
}));

export default useAppStore;
