import React, { useEffect, useState } from "react";
import { Avatar } from "../catalyst/avatar";
import PandaPic from "/image.png";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [showProfile, setShowProfile] = useState(false);
  const userEmail = localStorage.getItem("fmd_user_email");
  const userName = localStorage.getItem("fmd_user_name");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("fmd_user_email");
    localStorage.removeItem("fmd_user_name");
    localStorage.removeItem("fmd_user_token");

    localStorage.removeItem("fmd_user_id");
    navigate("/login");
  };

  return (
    <div className=" relative">
      {" "}
      <Avatar
        className="size-10"
        src={PandaPic}
        onClick={() => setShowProfile(!showProfile)}
      />{" "}
      {showProfile && (
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border p-4 z-50">
          <div className="flex items-center gap-3">
            <Avatar className="size-12" src={PandaPic} />
            <div>
              <p className="font-semibold text-gray-800 break-all">
                {userName}
              </p>
              <p className="text-sm text-gray-500 break-all">{userEmail}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-red-50 text-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
export default Profile;
