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
    navigate("/");
  };
  return (
    <div className="h-[100vh] md:w-[85vw]">
      <div className="flex  justify-center items-center p-1 ">
        <div className=" h-[8vh] w-[90vw] md:flex  md:justify-between md:items-center gap-2 p-4 ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full p-2 rounded-lg "
            placeholder="Enter the title.."
          />
        </div>
        <EllipsisVerticalIcon
          className="h-10 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <ReactQuill
        className="md:h-[86vh] h-[80vh] text-lg p-2 md:mt-3"
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
    </div>
  );
}

export default DocumentForm;
