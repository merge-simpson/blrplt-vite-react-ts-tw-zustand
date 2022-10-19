import Home from "@components/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
