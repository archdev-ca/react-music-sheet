"use client";
import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import useAppStore from "@/store/app";
import { SheetRowInterface } from "@/interfaces";
import DefaultLayout from "@/layouts/DefaultLayout";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.grey["100"],
        },
      }),
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

function AppLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const setTitles = useAppStore((state) => state.setTitles);
  useEffect(() => {
    const titlesFromStorage = localStorage.getItem("titles");
    let titleJSON: SheetRowInterface[] = [];

    /**
     * Local storage is empty so let's create it
     */
    if (!titlesFromStorage) {
      titleJSON = [
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

      localStorage.setItem("titles", JSON.stringify(titleJSON));
    } else {
      titleJSON = JSON.parse(titlesFromStorage);
    }

    setTitles(titleJSON);
  }, []);
  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <DefaultLayout>{children}</DefaultLayout>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

export default AppLayout;
