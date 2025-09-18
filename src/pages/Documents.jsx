import React, { useEffect, useState } from "react";
import { getDocuments, deleteDocument, updateDocument } from "../api/api";
import { ClockIcon, TrashIcon } from "@heroicons/react/24/solid";
import { getRandomColor } from "../utils/colors";

import FloatingBtn from "../components/FloatingBtn";
import SearchBar from "../components/SearchBar";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import DocumentsList from "../components/DocumentsList";
function Documents() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const fetchDocuments = async () => {
    const data = await getDocuments();
    setDocuments(data);
    console.log(data);
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const recentDoc = documents.slice(0, 10);
  const allDocs = documents;
  return (
    <div className="p-5 md:max-w-[85vw] ">
      <div className="">
        {" "}
        <SearchBar setSearch={setSearch} />
      </div>
      {!search && (
        <div>
          <div className=" flex items-center p-5  ">
            <ClockIcon className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Recent activity</h2>
          </div>

          <div className=" px-5 flex gap-5 overflow-x-auto">
            {recentDoc.map((doc, index) => (
              <div
                onClick={() => navigate(`/edit-document/${doc._id}`)}
                key={index}
                className={`bg-white border-l-4 border ${getRandomColor()}
                 w-64 h-50 p-5 rounded-2xl flex flex-col justify-between flex-shrink-0 `}
              >
                <div className="flex  ">
                  <p className="text-lg font-bold truncate">{doc.title}</p>
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: doc.text }}
                  className="line-clamp-6 text-sm overflow-hidden"
                />
              </div>
            ))}

            <FloatingBtn />
          </div>

          <div className="px-5 mt-10">
            <h2 className="text-lg font-semibold mb-4">All Documents</h2>

            <div className="overflow-x-auto bg-white rounded-xl shadow border">
              <DocumentsList
                documents={documents}
                setDocuments={setDocuments}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documents;
