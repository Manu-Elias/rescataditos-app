import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Animales from "./pages/Animales";
import DetalleAnimal from "./pages/DetalleAnimal";
import Adopcion from "./pages/Adopcion";
import Donaciones from "./pages/Donaciones";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import { useQuery } from "@tanstack/react-query";
import { getAnimals } from "./features/animals/services/animalesService";
import useAnimalStore from "./features/animals/store/useAnimalStore";
import { useEffect } from "react";

const App = () => {
  const setAnimals = useAnimalStore((state) => state.setAnimals);
  const { data, isLoading } = useQuery({
    queryKey: ["animals"],
    queryFn: getAnimals,
  });

  useEffect(() => {
    const savedData = localStorage.getItem("animals");

    if (!savedData && !isLoading) {
      setAnimals(data);
      localStorage.setItem("animals", JSON.stringify(data));
    } else if (savedData) {
      const savedAnimals = JSON.parse(savedData);
      setAnimals(savedAnimals);
    }
  }, [data, isLoading, setAnimals]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />

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
