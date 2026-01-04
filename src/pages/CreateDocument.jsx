import React, { useEffect, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import { createDocument, getVariables } from "../api/api";
import DocumentForm from "../components/DocumentForm";
import NavBar from "../components/NavBar";

function CreateDocument() {
  const [variables, setVariables] = useState([]);

  const fetchVariables = async () => {
    try {
      const res = await getVariables();
      setVariables(res);
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
    <div className="md:flex">
      <NavBar />

      <DocumentForm onSave={handleSave} variables={variables} mode="create" />
    </div>
  );
}

export default CreateDocument;
