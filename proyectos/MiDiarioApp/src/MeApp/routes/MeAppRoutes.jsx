import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const MeAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* En cualquier otro caso */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
