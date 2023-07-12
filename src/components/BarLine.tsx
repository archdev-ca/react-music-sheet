interface Props {
  isFloating?: boolean;
}

const BarLine = ({ isFloating }: Props) => {
  return <div className={`h-0.5 ${isFloating ? "" : "bg-black"}`}></div>;
};

export default BarLine;
