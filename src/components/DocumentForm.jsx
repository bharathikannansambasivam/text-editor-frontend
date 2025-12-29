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
  EllipsisVerticalIcon,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    navigate("/dashboard");
  };
  return (
    <div className=" md:w-[85vw] h-screen w-screen bottom-4 flex flex-col bg-gray-50">
      <div className="  flex  justify-between items-center gap-2 md:gap-6 p-3 md:p-4  ">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded-lg "
          placeholder="Enter the title.."
        />
        <EllipsisVerticalIcon
          className="h-8 w-8 md:hidden text-gray-600 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => setIsPreview(!isPreview)}
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
          >
            <EyeIcon className="h-4 w-4" /> Preview
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-green-100 hover:bg-green-200 text-sm"
          >
            <CheckCircleIcon className="h-4 w-4 text-green-600" />
            {mode === "create" ? "Save" : "Update"}
          </button>

          <button
            onClick={downloadPdf}
            className="flex items-center gap-1 px-3 py-2 rounded-md bg-blue-100 hover:bg-blue-200 text-sm"
          >
            <ArrowDownTrayIcon className="h-4 w-4 text-blue-600" /> Download
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-4 top-14 z-50">
          <div className="flex flex-col min-w-[180px] bg-white rounded-lg shadow-xl ring-1 ring-black/10">
            <button
              onClick={() => {
                setIsPreview(!isPreview);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
              Preview
            </button>

            <button
              onClick={() => {
                handleSave();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
            >
              <CheckCircleIcon className="h-4 w-4 text-green-600" />
              {mode === "create" ? "Save" : "Update"}
            </button>

            <button
              onClick={() => {
                downloadPdf();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
            >
              <ArrowDownTrayIcon className="h-4 w-4 text-blue-600" />
              Download
            </button>
          </div>
        </div>
      )}
      <ReactQuill
        className=" h-[86vh]   text-lg p-2 "
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
