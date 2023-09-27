import { StorageContext } from "@/context/StorageContext";
import { useContext } from "react";

type Props = {};

function useStorage({}: Props) {
  const { titles, setTitles } = useContext(StorageContext);
  return {
    titles,
    setTitles,
  };
}

export default useStorage;
