import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { MeAppRoutes } from "../MeApp/routes/MeAppRoutes";

export const AppRouter = () => {
  <Routes>
    {/* LOGIN / REGISTRO */}
    <Route path="/auth/*" element={<AuthRoutes />} />

    {/* RUTAS APLICACIÖN */}
    <Route path="/*" element={<MeAppRoutes />} />
  </Routes>;
};
