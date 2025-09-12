import React from "react";
import { Button } from "../catalyst/button";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function FloatingBtn() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-15 right-15 z-50 ">
      <Button
        className="cursor-pointer"
        onClick={() => navigate("/create-document")}
      >
        <div className=" h-10 w-10 flex justify-center items-center ">
          <PlusCircleIcon className="w-8 h-8 text-white" />
        </div>
      </Button>
    </div>
  );
}

export default FloatingBtn;
