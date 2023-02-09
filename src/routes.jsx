import PaginaPadrao from "Components/PaginaPadrao";
import Rodape from "Components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./Components/Menu";
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"
import Post from "Pages/Post";
import NaoEncontrado from "Pages/NãoEncontrado";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="sobreMim" element={<SobreMim />}/>
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NaoEncontrado />}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;