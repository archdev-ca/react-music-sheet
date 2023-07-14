import { ClefType, BeatData } from "@/interfaces";
import BarSpace from "./BarSpace";

interface Props {
  clef: ClefType;
  passive?: boolean;
  className?: "string";
  data: BeatData[];
}

const defaultProps = {
  passive: false,
};

const SPACES_CONFIG = {
  treble: [
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
  ],
  bass: [
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
    { line: true, floating: true, note: "" },
    { space: true, note: "" },
  ],
};

const BarColumn = ({ clef, className, passive, data }: Props) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
      }}
    >
      {SPACES_CONFIG[clef].map((space, i) => {
        return (
          <BarSpace
            beats={data}
            key={i}
            line={space.line}
            passive={passive}
            floating={space.floating}
          />
        );
      })}
    </div>
  );
};

BarColumn.defaultProps = defaultProps;

export default BarColumn;
