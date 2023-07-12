import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'
import SheetIndex from '@/pages/sheet'
import '@/css/global.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<SheetIndex />} />
      </Route>
    </Routes>
  )
}

export default App
