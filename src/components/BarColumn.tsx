import { ClefType, BeatData, BarSpaceData } from "@/interfaces";
import BarSpace from "./BarSpace";
import Beat from "./Beat";
import { styled } from "@mui/joy";

interface Props {
  barID?: number;
  beatIndex?: [number | null, number | null];
  className?: "string";
  clef: ClefType;
  data?: BeatData | undefined;
  locked?: boolean;
  passive?: boolean;
  staffID?: number;
  width?: string;
}

const defaultProps = {
  passive: false,
};

const SPACES_CONFIG: { treble: BarSpaceData[]; bass: BarSpaceData[] } = {
  treble: [
    // { variation: 7, line: true, floating: true, note: "c" },
    // { variation: 7, space: true, note: "b" },
    // { variation: 7, line: true, floating: true, note: "a" },
    // { variation: 7, space: true, note: "g" },
    // { variation: 7, line: true, floating: true, note: "f" },
    // { variation: 7, space: true, note: "e" },
    // { variation: 7, line: true, floating: true, note: "d" },
    // { variation: 7, space: true, note: "c" },
    // { variation: 6, line: true, floating: true, note: "b" },
    // { variation: 6, space: true, note: "a" },
    // { variation: 6, line: true, floating: true, note: "g" },
    // { variation: 6, space: true, note: "f" },
    // { variation: 6, line: true, floating: true, note: "e" },
    // { variation: 6, space: true, note: "d" },
    // ----------- Exclude above
    // { variation: 5, line: true, floating: true, note: "c" },
    // { variation: 5, space: true, note: "b" },
    // { variation: 5, line: true, floating: true, note: "a" },
    // { variation: 5, space: true, note: "g" },
    // { variation: 5, line: true, note: "f" },
    // { variation: 5, space: true, note: "e" },
    // { variation: 5, line: true, note: "d" },
    // { variation: 5, space: true, note: "c" },
    // { variation: 4, line: true, note: "b" },
    // { variation: 4, space: true, note: "a" },
    // { variation: 4, line: true, note: "g" },
    // { variation: 4, space: true, note: "f" },
    // { variation: 4, line: true, note: "e" },
    // { variation: 4, space: true, note: "d" },
    // { variation: 4, line: true, floating: true, note: "c" },
  ],
  bass: [
    // { variation: 3, space: true, note: "b" },
    // { variation: 3, line: true, note: "a" },
    // { variation: 3, space: true, note: "g" },
    // { variation: 3, line: true, note: "f" },
    // { variation: 3, space: true, note: "e" },
    // { variation: 3, line: true, note: "d" },
    // { variation: 3, space: true, note: "c" },
    // { variation: 2, line: true, note: "b" },
    // { variation: 2, space: true, note: "a" },
    // { variation: 2, line: true, note: "g" },
    // { variation: 2, space: true, note: "f" },
    // { variation: 2, line: true, floating: true, note: "e" },
    // { variation: 2, space: true, note: "d" },
    // { variation: 2, line: true, floating: true, note: "c" },
    // ------------ Exclude above
    // { variation: 1, space: true, note: "b" },
    // { variation: 1, line: true, floating: true, note: "a" },
    // { variation: 1, space: true, note: "g" },
    // { variation: 1, line: true, floating: true, note: "f" },
    // { variation: 1, space: true, note: "e" },
    // { variation: 1, line: true, floating: true, note: "d" },
    // { variation: 1, space: true, note: "c" },
    // { variation: 0, line: true, floating: true, note: "b" },
    // { variation: 0, space: true, note: "a" },
  ],
};

SPACES_CONFIG.treble.push({
  floating: true,
  variation: 4,
  line: true,
  note: "c",
  bottom: -18,
});
SPACES_CONFIG.treble.push({
  variation: 4,
  space: true,
  note: "d",
  bottom: -9,
});
SPACES_CONFIG.treble.push({
  variation: 4,
  line: true,
  note: "e",
  bottom: 0,
});
SPACES_CONFIG.treble.push({
  variation: 4,
  space: true,
  note: "f",
  bottom: 9,
});
SPACES_CONFIG.treble.push({
  variation: 4,
  line: true,
  note: "g",
  bottom: 18,
});
SPACES_CONFIG.treble.push({
  variation: 4,
  space: true,
  note: "a",
  bottom: 27,
});
SPACES_CONFIG.treble.push({
  variation: 4,
  line: true,
  note: "b",
  bottom: 36,
});

SPACES_CONFIG.treble.push({
  variation: 5,
  note: "c",
  bottom: 45,
  space: true,
});

SPACES_CONFIG.treble.push({
  variation: 5,
  note: "d",
  bottom: 54,
  line: true,
});
SPACES_CONFIG.treble.push({
  variation: 5,
  note: "e",
  bottom: 63,
  space: true,
});
SPACES_CONFIG.treble.push({
  variation: 5,
  note: "f",
  bottom: 72,
  line: true,
});
SPACES_CONFIG.treble.push({
  variation: 5,
  note: "g",
  bottom: 81,
  space: true,
});
SPACES_CONFIG.treble.push({
  floating: true,
  variation: 5,
  note: "a",
  bottom: 90,
  line: true,
});

SPACES_CONFIG.bass.push({
  floating: true,
  variation: 2,
  line: true,
  note: "e",
  bottom: -18,
});
SPACES_CONFIG.bass.push({
  variation: 2,
  space: true,
  note: "f",
  bottom: -9,
});
SPACES_CONFIG.bass.push({
  variation: 2,
  line: true,
  note: "g",
  bottom: 0,
});
SPACES_CONFIG.bass.push({
  variation: 2,
  space: true,
  note: "a",
  bottom: 9,
});
SPACES_CONFIG.bass.push({
  variation: 2,
  line: true,
  note: "b",
  bottom: 18,
});
SPACES_CONFIG.bass.push({
  variation: 3,
  space: true,
  note: "c",
  bottom: 27,
});
SPACES_CONFIG.bass.push({
  variation: 3,
  line: true,
  note: "d",
  bottom: 36,
});

SPACES_CONFIG.bass.push({
  variation: 3,
  note: "e",
  bottom: 45,
  space: true,
});

SPACES_CONFIG.bass.push({
  variation: 3,
  note: "f",
  bottom: 54,
  line: true,
});
SPACES_CONFIG.bass.push({
  variation: 3,
  note: "g",
  bottom: 63,
  space: true,
});
SPACES_CONFIG.bass.push({
  variation: 3,
  note: "a",
  bottom: 72,
  line: true,
});
SPACES_CONFIG.bass.push({
  variation: 3,
  note: "b",
  bottom: 81,
  space: true,
});
SPACES_CONFIG.bass.push({
  floating: true,
  variation: 4,
  note: "c",
  bottom: 90,
  line: true,
});

const BeatLayer = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`;

const BarColumn = ({
  clef,
  className,
  passive,
  data,
  staffID,
  barID,
  beatIndex,
  locked,
  width,
}: Props) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: width ? width : "100%",
        height: 81,
      }}
    >
      {data ? (
        <BeatLayer className="beatLayer">
          <Beat type={data.type} clef={clef} length={data.length} data={data} />
        </BeatLayer>
      ) : null}
      {SPACES_CONFIG[clef].map((space, i) => {
        return (
          <BarSpace
            bottom={space.bottom}
            barID={barID ? barID : 0}
            beatIndex={beatIndex}
            staffID={staffID ? staffID : 0}
            key={i}
            clef={clef}
            line={space.line}
            passive={passive}
            floating={space.floating}
            note={space.note}
            variation={space.variation}
            locked={locked}
          ></BarSpace>
        );
      })}
    </div>
  );
};

BarColumn.defaultProps = defaultProps;

export default BarColumn;
