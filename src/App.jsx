import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Animales from "./pages/Animales";
import DetalleAnimal from "./pages/DetalleAnimal";
import Adopcion from "./pages/Adopcion";
import Donaciones from "./pages/Donaciones";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="animales" element={<Animales />} />
        <Route path="animales/:id" element={<DetalleAnimal />} />
        <Route path="adopcion" element={<Adopcion />} />
        <Route path="donaciones" element={<Donaciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
