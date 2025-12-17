import React, { useState } from "react";
import { Avatar } from "../catalyst/avatar";
import PandaPic from "/image.png";

function Profile() {
  const [showProfile, setShowProfile] = useState(false);
  const userEmail = localStorage.getItem("fmd_user_email");
  const userName = localStorage.getItem("fmd_user_name");

  return (
    <div className="flex justify-center items-center">
      {" "}
      <Avatar className="size-10" src={PandaPic} />
      <div className="flex justify-center items-center hidden flex-col absolute bg-amber-200">
        <Avatar className="size-10" src={PandaPic} />
        <p>{userName}</p>
        <p>{userEmail}</p>
      </div>
    </div>
  );
}

export default Profile;
