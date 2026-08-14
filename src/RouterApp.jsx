import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import KitchenSinks from "./kitchensinks";
import Sijo from "./sijo";


function RouterApp() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<App />}
        />


        {/* KITCHEN SINK COLLECTIONS */}

        <Route
          path="/kitchen-sinks"
          element={<KitchenSinks />}
        />


        {/* SIJO JINDAL - SJ */}

        <Route
          path="/kitchen-sinks/sj"
          element={<SijoJindal />}
        />


        {/* SIJO - S */}

        <Route
          path="/kitchen-sinks/s"
          element={<Sijo />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default RouterApp;