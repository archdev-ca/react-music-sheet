import { ClefType, BeatData, BarSpaceData } from "@/interfaces";
import BarSpace from "./BarSpace";
import Beat from "./Beat";
import { styled } from "@mui/joy";

interface Props {
  clef: ClefType;
  passive?: boolean;
  className?: "string";
  data?: BeatData[] | undefined;
  staffID?: number;
  barID?: number;
}

const defaultProps = {
  passive: false,
};

const SPACES_CONFIG: { treble: BarSpaceData[]; bass: BarSpaceData[] } = {
  treble: [
    { variation: 7, line: true, floating: true, note: "c" },
    { variation: 7, space: true, note: "b" },
    { variation: 7, line: true, floating: true, note: "a" },
    { variation: 7, space: true, note: "g" },
    { variation: 7, line: true, floating: true, note: "f" },
    { variation: 7, space: true, note: "e" },
    { variation: 7, line: true, floating: true, note: "d" },
    { variation: 7, space: true, note: "c" },
    { variation: 6, line: true, floating: true, note: "b" },
    { variation: 6, space: true, note: "a" },
    { variation: 6, line: true, floating: true, note: "g" },
    { variation: 6, space: true, note: "f" },
    { variation: 6, line: true, floating: true, note: "e" },
    { variation: 6, space: true, note: "d" },
    { variation: 5, line: true, floating: true, note: "c" },
    { variation: 5, space: true, note: "b" },
    { variation: 5, line: true, floating: true, note: "a" },
    { variation: 5, space: true, note: "g" },
    { variation: 5, line: true, note: "f" },
    { variation: 5, space: true, note: "e" },
    { variation: 5, line: true, note: "d" },
    { variation: 5, space: true, note: "c" },
    { variation: 4, line: true, note: "b" },
    { variation: 4, space: true, note: "a" },
    { variation: 4, line: true, note: "g" },
    { variation: 4, space: true, note: "f" },
    { variation: 4, line: true, note: "e" },
    { variation: 4, space: true, note: "d" },
    { variation: 4, line: true, floating: true, note: "c" },
  ],
  bass: [
    { variation: 3, space: true, note: "b" },
    { variation: 3, line: true, note: "a" },
    { variation: 3, space: true, note: "g" },
    { variation: 3, line: true, note: "f" },
    { variation: 3, space: true, note: "e" },
    { variation: 3, line: true, note: "d" },
    { variation: 3, space: true, note: "c" },
    { variation: 2, line: true, note: "b" },
    { variation: 2, space: true, note: "a" },
    { variation: 2, line: true, note: "g" },
    { variation: 2, space: true, note: "f" },
    { variation: 2, line: true, floating: true, note: "e" },
    { variation: 2, space: true, note: "d" },
    { variation: 2, line: true, floating: true, note: "c" },
    { variation: 1, space: true, note: "b" },
    { variation: 1, line: true, floating: true, note: "a" },
    { variation: 1, space: true, note: "g" },
    { variation: 1, line: true, floating: true, note: "f" },
    { variation: 1, space: true, note: "e" },
    { variation: 1, line: true, floating: true, note: "d" },
    { variation: 1, space: true, note: "c" },
    { variation: 0, line: true, floating: true, note: "b" },
    { variation: 0, space: true, note: "a" },
  ],
};

const BeatsLayer = styled("div")`
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
}: Props) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
      }}
    >
      <BeatsLayer>
        {data && data.length
          ? data.map((beat, i) => {
              return <Beat data={beat} key={i} />;
            })
          : null}
      </BeatsLayer>
      {SPACES_CONFIG[clef].map((space, i) => {
        return (
          <BarSpace
            barID={barID ? barID : 0}
            staffID={staffID ? staffID : 0}
            key={i}
            line={space.line}
            passive={passive}
            floating={space.floating}
            note={space.note}
            variation={space.variation}
          />
        );
      })}
    </div>
  );
};

BarColumn.defaultProps = defaultProps;

export default BarColumn;
