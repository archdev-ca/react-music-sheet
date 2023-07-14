import BarSpace from "./BarSpace";
import { Clef } from "@/interfaces/common";

interface Props {
  clef: Clef;
  passive?: boolean;
  className?: "string";
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

const BarColumn = ({ clef, className, passive }: Props) => {
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
