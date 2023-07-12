import BarLine from "./BarLine";
import BarSpace from "./BarSpace";

const Bar = () => {
  return (
    <div className="w-full">
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine />
      <BarSpace />
      <BarLine isFloating />
      <BarSpace />
    </div>
  );
};

export default Bar;
