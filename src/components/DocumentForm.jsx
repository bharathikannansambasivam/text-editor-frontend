import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "../catalyst/button";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

function DocumentForm({
  initialTitle = "Untitled Document",
  initialText = "",
  variables = [],
  mode = "create",
  onSave,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [isPreview, setIsPreview] = useState(false);
  const [text, setText] = useState(initialText);
  const navigate = useNavigate();
  useEffect(() => {
    setTitle(initialTitle);
    setText(initialText);
  }, [initialTitle, initialText]);

  const replacePlaceholders = (inputText) => {
    let replacedText = inputText;
    variables.forEach(({ key, value }) => {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "gi");
      replacedText = replacedText.replace(regex, value);
    });
    return replacedText;
  };
  const downloadPdf = () => {
    const element = document.createElement("div");
    element.innerHTML = replacePlaceholders(text);
    const opt = { margin: 10, filename: `${title || "document"}.pdf` };
    html2pdf().from(element).set(opt).save();
  };
  const handleSave = () => {
    onSave({ title, text });
    navigate("/");
  };
  return (
    <div className="h-[100vh] md:w-[85vw]">
      <div className="flex gap-3 justify-between p-4">
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <EyeIcon className="h-5 w-5" />
          Preview
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
        >
          <CheckCircleIcon className="h-5 w-5" />
          {mode === "create" ? "Save" : "Update"}
        </button>
        <button
          onClick={downloadPdf}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          Download
        </button>
      </div>
      <div className=" h-[8vh] md:flex  md:justify-between md:items-center gap-5 p-2 pt-4">
        <div className="w-full border">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full p-2  "
            placeholder="Enter the title.."
          />
        </div>
      </div>
      <ReactQuill
        className=" h-[86vh] text-lg p-2 mt-10 md:mt-3"
        value={text}
        onChange={setText}
      />
      {isPreview && (
        <Preview
          title={title}
          text={replacePlaceholders(text)}
          onClose={setIsPreview}
        />
      )}
    </div>
  );
}

export default DocumentForm;
