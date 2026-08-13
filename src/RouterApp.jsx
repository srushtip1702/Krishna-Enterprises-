import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import SijoJindal from "./SijoJindal";


function RouterApp() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/kitchen-sinks/sijo-jindal"
          element={<SijoJindal />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default RouterApp;