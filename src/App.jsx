import { Route, Routes } from "react-router-dom";
import PhotoProvider from "./context/PhotoContext"; /* se agrega */
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      {/* REQUERIMIENTO 2 */}
      <PhotoProvider> {/* se agrega */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PhotoProvider>
    </div>
  );
};
export default App;
