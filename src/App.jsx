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
import AI from "./pages/AI";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Help from "./pages/Help";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("fmd_user_token");
  return token ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("fmd_user_token");
  return token ? <Navigate to="/dashboard" /> : children;
};

function LayoutWrapper() {
  const location = useLocation();
  const route = ["/", "/login", "/signup", "/help", "/create-document"];
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
            path="/help"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ai"
            element={
              <ProtectedRoute>
                <AI />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
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
