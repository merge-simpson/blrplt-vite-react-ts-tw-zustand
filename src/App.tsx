import "./App.css";
import UnauthenticatedRoutes from "@components/routes/UnauthenticatedRoutes";
import { useEffect, useState } from "react";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import { DarkButton } from "@styles/button";

function App() {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [RoutesComponent, setRoutesComponent] = useState<React.ReactElement>(
    <UnauthenticatedRoutes />
  );

  useEffect(() => {
    isAuthenticated && setRoutesComponent(<ProtectedRoutes />);
    !isAuthenticated && setRoutesComponent(<UnauthenticatedRoutes />);
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen">
      <aside className="fixed left-1/2 -translate-x-1/2 top-2">
        <DarkButton onClick={() => setAuthenticated(!isAuthenticated)}>
          Flip state of auth
        </DarkButton>
      </aside>
      {RoutesComponent}
    </div>
  );
}

export default App;
