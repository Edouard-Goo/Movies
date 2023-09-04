import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Accueil from "./Pages/Accueil";
import Movies from "./Pages/Movies";
import Avis from "./Pages/Avis";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
