import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

import Favourite from "./Pages/Favourite";

import CategoryPage from "./Pages/CategoryPage";
import SelectedCategoryPage from "./Pages/SelectedCategoryPage";
import RandomPage from "./Pages/RandomPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        <Route path="/favorites" element={<Favourite />}></Route>

        <Route
          path="/selectedcategory"
          element={<SelectedCategoryPage />}
        ></Route>
        <Route path="/random" element={<RandomPage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
