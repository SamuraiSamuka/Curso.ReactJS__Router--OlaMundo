import PaginaPadrao from "Components/PaginaPadrao";
import Rodape from "Components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./Components/Menu";
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="SobreMim" element={<SobreMim />}/>
        </Route>
        <Route path="*" element={<h1>Página não encontrada</h1>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;