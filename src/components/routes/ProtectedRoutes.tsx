import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<div>Login Page</div>} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
