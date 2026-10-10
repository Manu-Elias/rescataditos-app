import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Animals from "./pages/Animals/Animals";
import AnimalDetail from "./pages/AnimalDetail/AnimalDetail";
import Adoption from "./pages/Adoption/Adoption";
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
          <Route index element={<Home />} />
          <Route path="nosotros" element={<AboutUs />} />
          <Route path="animales" element={<Animals />} />
          <Route path="animales/:id" element={<AnimalDetail />} />
          <Route path="adopcion" element={<Adoption />} />
          <Route path="donaciones" element={<Donaciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
