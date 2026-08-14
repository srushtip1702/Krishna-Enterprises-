import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import KitchenSinks from "./KitchenSinks";
import Sijo from "./Sijo";
import SijoJindal from "./SijoJindal";

function RouterApp() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<App />}
        />

        {/* KITCHEN SINK CATEGORIES */}
        <Route
          path="/kitchen-sinks"
          element={<KitchenSinks />}
        />

        {/* SIJO JINDAL */}
        <Route
          path="/kitchen-sinks/sj"
          element={<SijoJindal />}
        />

        {/* SIJO */}
        <Route
          path="/kitchen-sinks/s"
          element={<Sijo />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default RouterApp;