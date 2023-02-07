import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./Components/Menu";
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/SobreMim" element={<SobreMim />}/>
        <Route path="*" element={<h1>Página não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;