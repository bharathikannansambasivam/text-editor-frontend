import React from "react";
import { Button } from "../catalyst/button";

function Preview({ title, text, onClose }) {
  return (
    <div className="bg-black/40 fixed  inset-0 flex justify-center items-center  ">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[700px] max-h-[85vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">{title || "Untitled"}</h2>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
        <Button onClick={() => onClose(false)}>Close</Button>
      </div>
    </div>
  );
}

export default Preview;
