import React, { useEffect, useState } from "react";
import DocumentForm from "../components/DocumentForm";
import { getDocument, getVariables, updateDocument } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

function EditDocument() {
  const [variables, setVariables] = useState([]);
  const [oldTitle, setOldTitle] = useState("");
  const [oldText, setOldText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchDocument = async () => {
    try {
      const doc = await getDocument(id);
      setOldTitle(doc.data.title);
      setOldText(doc.data.text);
      console.log(doc);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVariables = async () => {
    try {
      const res = await getVariables();
      setVariables(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async ({ title, text }) => {
    try {
      await updateDocument(title, text, id);
      navigate("/");
    } catch (error) {}
  };
  useEffect(() => {
    fetchVariables();
    fetchDocument();
  }, [id]);

  return (
    <div>
      <DocumentForm
        mode="edit"
        variables={variables}
        initialText={oldText}
        initialTitle={oldTitle}
        onSave={handleUpdate}
      />
    </div>
  );
}

export default EditDocument;
