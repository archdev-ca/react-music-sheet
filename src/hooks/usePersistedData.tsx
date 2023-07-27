import { SheetRowInterface } from "@/interfaces";
import { useEffect, useState } from "react";

const usePersistedData = () => {
  const [sheets, setSheets] = useState<SheetRowInterface[]>([]);

  useEffect(() => {
    const payload = localStorage.getItem("sheets");
    let parsedPayload: unknown = [];
    if (payload) {
      try {
        parsedPayload = JSON.parse(payload);
        setSheets(parsedPayload as SheetRowInterface[]);
      } catch (e) {
        parsedPayload = [];
      }
    }
  }, []);

  return {
    sheets,
    setSheets,
  };
};

export default usePersistedData;
