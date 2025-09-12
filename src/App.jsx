import React from "react";
import Documents from "./pages/Documents";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDocument from "./pages/CreateDocument";

import Variables from "./pages/Variables";
import EditDocument from "./pages/EditDocument";
function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className=" w-fit fixed ">
          <NavBar />
        </div>
        <div></div>
        <div className=" ml-[15vw] w-full ">
          <Routes>
            <Route path="/" element={<Documents />}></Route>
            <Route path="/create-document" element={<CreateDocument />}></Route>
            <Route path="/variables" element={<Variables />}></Route>
            <Route path="/edit-document/:id" element={<EditDocument />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
