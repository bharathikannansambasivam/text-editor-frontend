import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "../catalyst/button";
import { createDocument, getVariables } from "../api/api";
import html2pdf from "html2pdf.js";
import DocumentForm from "../components/DocumentForm";

function CreateDocument() {
  const [variables, setVariables] = useState([]);

  const fetchVariables = async () => {
    try {
      const res = await getVariables();
      setVariables(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVariables();
  }, []);

  const handleSave = async ({ title, text }) => {
    try {
      await createDocument(title, text);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DocumentForm onSave={handleSave} variables={variables} mode="create" />
  );
}

export default CreateDocument;
