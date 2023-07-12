import { Route, Routes } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import SheetIndex from "@/pages/sheet";
import SheetCreate from "@/pages/sheet/create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<SheetIndex />} />
        <Route path="create" element={<SheetCreate />} />
      </Route>
    </Routes>
  );
}

export default App;
