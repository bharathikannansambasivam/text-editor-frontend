import React, { useEffect, useState } from "react";
import { getDocuments, deleteDocument, updateDocument } from "../api/api";
import { ClockIcon } from "@heroicons/react/24/solid";
import { getRandomColor } from "../utils/colors";

import FloatingBtn from "../components/FloatingBtn";
import SearchBar from "../components/SearchBar";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
function Documents() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const fetchDocuments = async () => {
    const data = await getDocuments();
    setDocuments(data);
    console.log(data);
  };
  const handleDelete = async (id) => {
    deleteDocument(id);
    setDocuments((prevDocs) => prevDocs.filter((doc) => doc._id !== id));
  };
  useEffect(() => {
    fetchDocuments();
  }, []);

  const recentDoc = documents.slice(0, 10);
  const allDocs = documents;
  return (
    <div className="p-5 max-w-[85vw] ">
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
              <table className="min-w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Title</th>
                    <th className="px-6 py-3 font-semibold">Preview</th>
                    <th className="px-6 py-3 font-semibold">Last Edited</th>
                    <th className="px-6 py-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allDocs.map((doc, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50"
                      onClick={() => navigate(`/edit-document/${doc._id}`)}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 truncate max-w-[50px]">
                        {doc.title}
                      </td>

                      <td
                        className="px-6 py-4 text-gray-600 max-w-[300px] line-clamp-1 truncate"
                        dangerouslySetInnerHTML={{ __html: doc.text }}
                      />

                      <td className="px-6 py-4 text-gray-500">
                        {doc.updatedAt
                          ? new Date(doc.updatedAt).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(doc._id);
                          }}
                          className="px-3 py-1 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Documents;
