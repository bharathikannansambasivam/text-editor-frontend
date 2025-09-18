import React from "react";
import { Avatar } from "../catalyst/avatar";
import PandaPic from "/image.png";

function Profile() {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <Avatar className="size-10" src={PandaPic} />
    </div>
  );
}

export default Profile;
