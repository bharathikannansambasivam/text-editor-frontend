import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "../catalyst/button";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";

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
    <div className="h-[100vh] w-[85vw]">
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
        <div className="flex gap-4 my-2 sm:mt-0">
          <Button variant="ghost" onClick={() => setIsPreview(!isPreview)}>
            Preview
          </Button>
          <Button className="bg-green-500 text-white" onClick={handleSave}>
            {mode === "create" ? "Save" : "Update"}
          </Button>
          <Button className="bg-blue-500 text-white" onClick={downloadPdf}>
            Download
          </Button>
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
