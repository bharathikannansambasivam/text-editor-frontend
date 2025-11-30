import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_NAME } from "../../const";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-[#f3f4f8] flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-2xl border border-slate-200 shadow-lg rounded-3xl p-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3">
          Welcome to <span className="text-purple-700">{APP_NAME}</span>
        </h1>

        <p className="text-slate-500 text-lg max-w-md">
          Create, edit, organize and find your documents all in one smart
          workspace.
        </p>

        <button
          className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3 text-white font-semibold rounded-2xl shadow-md text-lg transition active:scale-95"
          onClick={() => navigate("/login")}
        >
          Get Started →
        </button>

        <p className="text-xs text-slate-400 mt-5">
          © {new Date().getFullYear()} {APP_NAME} – Your smart document space
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
