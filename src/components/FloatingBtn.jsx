import React from "react";
import { Button } from "../catalyst/button";
import { useNavigate } from "react-router-dom";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
function FloatingBtn() {
  const navigate = useNavigate();
  return (
    <div className="hidden md:block fixed bottom-15 right-15 z-50 rounded-full   bg-slate-800">
      <div
        onClick={() => navigate("/create-document")}
        className=" cursor-pointer h-10 w-10 flex justify-center p-8 rounded-full opacity-85  items-center bg-slate-800"
      >
        <CreateRoundedIcon className="w-8 h-8 text-white opacity-100 " />
      </div>
    </div>
  );
}

export default FloatingBtn;
