import { ShareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { deleteDocument } from "../api/api";
import pdf from "/pdf.png";
function DocumentsList({ documents, setDocuments }) {
  const [openMenu, setOpenMenu] = useState(null);
  const allDocs = documents;
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    deleteDocument(id);
    setDocuments((prevDocs) => prevDocs.filter((doc) => doc._id !== id));
    setOpenMenu(null);
  };
  return (
    <div className="">
      <table className="min-w-full text-left text-sm  text-gray-700 mb-9 md:mb-0">
        <tbody className="">
          {allDocs.length === 0 ? (
            <p className="flex justify-center  p-4  font-semibold">
              No recent Documents
            </p>
          ) : (
            <div>
              {allDocs.map((doc, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 flex justify-between w-full  p-5 "
                >
                  <div
                    className="flex cursor-pointer "
                    onClick={() => navigate(`/edit-document/${doc._id}`)}
                  >
                    <img src={pdf} className="h-10 w-20" alt="pdflogo" />
                    <div className="flex flex-col">
                      <td className=" font-medium text-gray-900 ">
                        {doc.title}
                      </td>

                      <td className=" text-gray-500">
                        {doc.updatedAt
                          ? new Date(doc.updatedAt).toLocaleDateString()
                          : "—"}
                      </td>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center  ">
                    <MoreVertIcon
                      className="h-5 w-5 sm:mr-10 text-gray-600   "
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(openMenu === doc._id ? null : doc._id);
                      }}
                    ></MoreVertIcon>
                  </div>
                  {openMenu === doc._id && (
                    <div
                      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
                      onClick={() => setOpenMenu(null)}
                    >
                      <div
                        className="w-full max-w-md bg-white border rounded-t-2xl p-4 flex flex-col justify-center items-center   transform transition-transform duration-300 "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(doc._id);
                          }}
                          className="w-full flex items-center gap-2  justify-center text-left px-4 py-3 text-sm hover:bg-gray-100 text-red-600"
                        >
                          <TrashIcon className="h-4 w-4" /> Delete
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 text-left px-4 py-3 text-sm hover:bg-gray-100 text-black">
                          <ShareIcon className="h-4 w-4" />
                          Share
                        </button>
                        <button
                          className="w-full flex items-center justify-center gap-2 text-left px-4 py-3 text-sm hover:bg-gray-100 text-black"
                          onClick={() => setOpenMenu(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </tr>
              ))}
            </div>
          )}
        </tbody>
        {console.log(openMenu)}
      </table>
    </div>
  );
}

export default DocumentsList;
