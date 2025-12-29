import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { chatWithAI } from "../api/api.jsx";
import { useNavigate } from "react-router-dom";
function AI() {
  const [query, setQuery] = useState("");
  const [AIResponses, setAIResponses] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (!query.trim()) {
        alert("query cannot be empty!");
        return;
      }
      const result = await chatWithAI(query);

      setAIResponses((prev) => [...prev, { query, result }]);
      setQuery("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="p-4 border-b bg-white  flex md:justify-start justify-between items-center  gap-2">
        <button
          className="flex  md:hidden 
           gap-1.5 left-5 sm:left-20"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowBackIcon />
        </button>
        <div className="flex gap-2">
          <SmartToyIcon />
          <h2 className="font-semibold">AI Assistant</h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-20 md:mb-0">
        {AIResponses.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-end">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-xl max-w-xs">
                {item.query}
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white border px-4 py-2 rounded-xl max-w-xs text-gray-700">
                {item.result}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t bg-white md:mb-0  flex gap-2 fixed bottom-0 w-full md:static  z-[10]">
        <input
          className="flex-1 border rounded-xl px-3 py-2 outline-none"
          type="text"
          placeholder="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-4 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AI;
