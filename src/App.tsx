import "./App.css";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import { useEffect, useState } from "react";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import { DarkButton } from "@styles/button";
import useAuth from "@store/auth/useAuth";

function App() {
  // const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const auth = useAuth();
  const { isAuthenticated, toggleAuthDummy } = auth;
  const [RoutesComponent, setRoutesComponent] = useState<React.ReactElement>(
    <UnauthenticatedRoutes />
  );

  useEffect(() => {
    isAuthenticated && setRoutesComponent(<ProtectedRoutes />);
    !isAuthenticated && setRoutesComponent(<UnauthenticatedRoutes />);
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen">
      {RoutesComponent}
      <aside className="fixed left-1/2 -translate-x-1/2 top-2">
        <DarkButton onClick={toggleAuthDummy}>Flip state of auth</DarkButton>
      </aside>
    </div>
  );
}

export default App;
