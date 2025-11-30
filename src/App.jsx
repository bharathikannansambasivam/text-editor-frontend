import React from "react";
import Documents from "./pages/Documents";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CreateDocument from "./pages/CreateDocument";

import Variables from "./pages/Variables";
import EditDocument from "./pages/EditDocument";
import Settings from "./pages/Settings";
import Themes from "./pages/Themes";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
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
          <Route path="/" element={<GetStarted />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Documents />}></Route>

          <Route path="/create-document" element={<CreateDocument />}></Route>
          <Route path="/variables" element={<Variables />}></Route>
          <Route path="/edit-document/:id" element={<EditDocument />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/themes" element={<Themes />}></Route>
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
