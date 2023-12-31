import { Box, styled } from "@mui/material";
import treble from "@/assets/images/treble.png";
import bass from "@/assets/images/bass.png";
import Space from "@/components/Space";

type Props = {
  type: "treble" | "bass";
};

const SymbolCol = styled("div")`
  position: relative;
`;

const trebleSpaces = [
  {
    line: true,
    floating: true,
    note: "b6",
  },
  {
    line: false,
    floating: true,
    note: "a6",
  },
  {
    line: true,
    floating: true,
    note: "g6",
  },
  {
    line: false,
    floating: true,
    note: "f6",
  },
  {
    line: true,
    floating: true,
    note: "e6",
  },
  {
    line: false,
    floating: true,
    note: "d6",
  },
  {
    line: true,
    floating: true,
    note: "c6",
  },
  {
    line: false,
    floating: true,
    note: "b5",
  },
  {
    line: true,
    floating: true,
    note: "a5",
  },
  {
    line: false,
    floating: true,
    note: "g5",
  },
  {
    line: true,
    floating: false,
    note: "f5",
  },
  {
    line: false,
    floating: false,
    note: "e5",
  },
  {
    line: true,
    floating: false,
    note: "d5",
  },
  {
    line: false,
    floating: false,
    note: "c5",
  },
  {
    line: true,
    floating: false,
    note: "b4",
  },
  {
    line: false,
    floating: false,
    note: "a4",
  },
  {
    line: true,
    floating: false,
    note: "g4",
  },
  {
    line: false,
    floating: false,
    note: "f4",
  },
  {
    line: true,
    floating: false,
    note: "e4",
  },
  {
    line: false,
    floating: false,
    note: "d4",
  },
  {
    line: true,
    floating: true,
    note: "c4",
  },
];

const bassSpaces = [
  {
    line: true,
    floating: true,
    note: "c4",
  },
  {
    line: false,
    floating: true,
    note: "b3",
  },
  {
    line: true,
    floating: false,
    note: "a3",
  },
  {
    line: false,
    floating: false,
    note: "g3",
  },
  {
    line: true,
    floating: false,
    note: "f3",
  },
  {
    line: false,
    floating: false,
    note: "e3",
  },
  {
    line: true,
    floating: false,
    note: "d3",
  },
  {
    line: false,
    floating: false,
    note: "c3",
  },
  {
    line: true,
    floating: false,
    note: "b2",
  },
  {
    line: false,
    floating: false,
    note: "a2",
  },
  {
    line: true,
    floating: false,
    note: "g2",
  },
  {
    line: false,
    floating: false,
    note: "f2",
  },
  {
    line: true,
    floating: true,
    note: "e2",
  },
  {
    line: false,
    floating: true,
    note: "d2",
  },
  {
    line: true,
    floating: true,
    note: "c2",
  },
];

function Staff({ type }: Props) {
  let sigImage;
  let sigImageProps = {};

  switch (type) {
    case "treble":
      sigImage = treble;
      sigImageProps = {
        width: 35,
        style: { marginLeft: 10, position: "absolute", top: "80px" },
      };
      break;
    case "bass":
      sigImage = bass;
      sigImageProps = {
        width: 40,
        style: { marginLeft: 10, position: "absolute", top: "40px" },
      };
      break;
    default:
      sigImage = treble;
  }

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <SymbolCol>
        <img src={sigImage.src} alt="" width="20" {...sigImageProps} />
        <Box sx={{ width: 80 }}>
          {type === "treble"
            ? trebleSpaces.map((space, i) => {
                return (
                  <Space
                    ornamental
                    line={space.line}
                    floating={space.floating}
                    key={i}
                  />
                );
              })
            : null}
          {type === "bass"
            ? bassSpaces.map((space, i) => {
                return (
                  <Space
                    ornamental
                    line={space.line}
                    floating={space.floating}
                    key={i}
                  />
                );
              })
            : null}
        </Box>
      </SymbolCol>
      <Box sx={{ width: "100%" }}>
        {type === "treble"
          ? trebleSpaces.map((space, i) => {
              return (
                <Space line={space.line} floating={space.floating} key={i} />
              );
            })
          : null}
        {type === "bass"
          ? bassSpaces.map((space, i) => {
              return (
                <Space line={space.line} floating={space.floating} key={i} />
              );
            })
          : null}
      </Box>
    </Box>
  );
}

export default Staff;
