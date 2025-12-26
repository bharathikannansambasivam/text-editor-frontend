import React from "react";

import linkedin from "/social_icons/linkedin.svg";
import service from "/social_icons/services.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import github from "/social_icons/github.svg";
import mail from "/social_icons/mail.svg";
import leetcode from "/social_icons/leetcode.svg";
import medium from "/social_icons/medium.svg";
import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();
  const social_info = [
    {
      icon: linkedin,
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/bharathikannan-sambasivam/",
    },
    {
      icon: github,
      platform: "GitHub",
      url: "https://github.com/bharathikannansambasivam",
    },
    {
      icon: leetcode,
      platform: "Leetcode",
      url: "https://leetcode.com/u/bharathikannansambasivam/",
    },
    {
      icon: medium,
      platform: "Medium",
      url: "https://medium.com/@bharathikannansambasivam",
    },
    {
      icon: mail,
      platform: "Mail",
      url: "mailto:bharathikannansambasivam@gmail.com",
    },
  ];

  return (
    <div className="p-6 h-screen w-full bg-white flex flex-col items-center">
      <div className="flex  py-3 justify-center w-full items-center ">
        <button
          className="flex absolute gap-1.5 left-5 sm:left-20"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowBackIcon />
          <p className="font-bold hidden sm:block"> Back</p>
        </button>
        <h3 className="text-2xl font-bold">Help & Support</h3>
      </div>

      <img className="h-32" src={service} alt="" />

      <div className="text-center text-gray-600 mt-4">
        <h2 className="sm:text-4xl text-2xl font-semibold">
          Need help or have feedback?
        </h2>
        <p className="mt-2">You are in the right place</p>
      </div>

      <p className="my-6 text-center">
        <span className="font-medium">Email:</span>{" "}
        <a
          href="mailto:bharathikannansambasivam@gmail.com"
          className="text-purple-600 hover:underline"
        >
          bharathikannansambasivam@gmail.com
        </a>
      </p>

      <form
        action="https://formspree.io/f/xkowdega"
        method="POST"
        className="max-w-lg w-full mt-6 flex flex-col gap-4"
      >
        <input
          name="email"
          placeholder="Your email"
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-400"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your message or suggestion"
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-400 resize-none"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          Send
        </button>
      </form>

      <div className="flex gap-6 mt-10">
        {social_info.map((item) => (
          <a
            key={item.platform}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src={item.icon} alt={item.platform} className="w-8 h-8" />
          </a>
        ))}
      </div>
      <p className="mt-auto text-sm text-gray-400 text-center py-4">
        © {new Date().getFullYear()} FindMyDocs. All rights reserved.
      </p>
    </div>
  );
}

export default Help;
