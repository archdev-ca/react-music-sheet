import { StorageContext } from "@/context/StorageContext";
import { useContext } from "react";

function useStorage() {
  const { titles, setTitles } = useContext(StorageContext);
  return {
    titles,
    setTitles,
  };
}

export default useStorage;
