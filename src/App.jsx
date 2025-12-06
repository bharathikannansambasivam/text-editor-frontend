import React from "react";
import Documents from "./pages/Documents";
import NavBar from "./components/NavBar";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import CreateDocument from "./pages/CreateDocument";
import Variables from "./pages/Variables";
import EditDocument from "./pages/EditDocument";
import Settings from "./pages/Settings";
import Themes from "./pages/Themes";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";

const ProtectedRoute = ({ children }) => {
  const userId = localStorage.getItem("fmd_user_id");
  return userId ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const userId = localStorage.getItem("fmd_user_id");
  return userId ? <Navigate to="/dashboard" /> : children;
};

function LayoutWrapper() {
  const location = useLocation();
  const route = ["/", "/login", "/signup"];
  const hideNav = route.includes(location.pathname);

  return (
    <div className="flex">
      {!hideNav && (
        <div className=" w-fit fixed ">
          <NavBar />
        </div>
      )}

      <div className={!hideNav ? "md:ml-[15vw] w-full" : "w-full"}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <GetStarted />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Documents />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/create-document"
            element={
              <ProtectedRoute>
                <CreateDocument />
              </ProtectedRoute>
            }
          />

          <Route
            path="/variables"
            element={
              <ProtectedRoute>
                <Variables />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-document/:id"
            element={
              <ProtectedRoute>
                <EditDocument />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/themes"
            element={
              <ProtectedRoute>
                <Themes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
export default App;
