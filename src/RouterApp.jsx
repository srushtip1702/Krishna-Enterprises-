import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import KitchenSinks from "./kitchensinks";
import Sijo from "./sijo";
import SijoJindal from "./SijoJindal";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE - ROUTING */}
        <Route
          path="/"
          element={<App />}
        />

        {/* KITCHEN SINKS CATEGORY */}
        <Route
          path="/kitchen-sinks"
          element={<KitchenSinks />}
        />

        {/* SIJO JINDAL - SJ PRODUCTS */}
        <Route
          path="/kitchen-sinks/sj"
          element={<SijoJindal />}
        />

        {/* SIJO - S PRODUCTS */}
        <Route
          path="/kitchen-sinks/s"
          element={<Sijo />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;