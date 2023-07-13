import React from "react";
import { styled } from "@mui/joy";
import BarSpace from "./BarSpace";
import { Clef } from "@/interfaces/common";

interface Props {
  clef: Clef;
  className?: "string";
}

const defaultProps = {};

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

const BarColumn = ({ clef, className }: Props) => {
  return (
    <div className={className}>
      {SPACES_CONFIG[clef].map((space, i) => {
        return (
          <BarSpace
            key={i}
            line={space.line}
            space={space.space}
            floating={space.floating}
          />
        );
      })}
    </div>
  );
};

BarColumn.defaultProps = defaultProps;

export default BarColumn;
