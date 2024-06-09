import { Routes, Route } from "react-router-dom";
import { Home, Informes, Reportes } from "../index";
export function MyRoutes() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informes" element={<Informes />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
  );
}
