import { useEffect, useState } from "react";
import { getDocuments } from "../api/api";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { getRandomColor } from "../utils/colors";
import loader from "../../public/loading.svg";
import FloatingBtn from "../components/FloatingBtn";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import DocumentsList from "../components/DocumentsList";
function Documents() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const fetchDocuments = async () => {
    const data = await getDocuments();
    setDocuments(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const recentDoc = documents.slice(0, 5);
  return (
    <div className="p-5 md:max-w-[85vw] ">
      <div className="">
        {" "}
        <SearchBar setSearch={setSearch} />
      </div>
      {!search && (
        <div>
          <div className=" flex items-center gap-3 p-5   ">
            <UpdateRoundedIcon className="h-5 w-5 " />
            <h2 className="text-lg font-semibold">Recent activity</h2>
          </div>

          {isLoading ? (
            <div
              className=" flex justify-center 
              p-16"
            >
              <img src={loader} alt="" />
            </div>
          ) : (
            <div className="  ">
              {recentDoc.length == 0 ? (
                <p className="flex justify-center  text-sm  w-screen p-4 text-gray-700  font-semibold">
                  No recent Documents
                </p>
              ) : (
                <div className=" px-5 flex gap-5 overflow-x-auto ">
                  {" "}
                  {recentDoc.map((doc, index) => (
                    <div
                      onClick={() => navigate(`/edit-document/${doc._id}`)}
                      key={index}
                      className={`bg-white border-l-4 border ${getRandomColor()}
                 w-64 h-50 p-5 rounded-2xl flex flex-col justify-between flex-shrink-0  `}
                    >
                      <div className="flex  ">
                        <p className="text-lg font-bold truncate">
                          {doc.title}
                        </p>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{ __html: doc.text }}
                        className="line-clamp-6 text-sm overflow-hidden "
                      />
                    </div>
                  ))}
                </div>
              )}

              <FloatingBtn />
            </div>
          )}

          <div className="px-5 mt-10">
            <h2 className="text-lg font-semibold mb-4">All Documents</h2>

            {isLoading ? (
              <div className=" flex justify-center   p-10">
                <img src={loader} alt="" />
              </div>
            ) : (
              <div className="    ">
                <DocumentsList
                  documents={documents}
                  setDocuments={setDocuments}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Documents;
