import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarSection,
  SidebarItem,
  SidebarLabel,
  SidebarSpacer,
} from "../catalyst/sidebar";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Sidebar className="bg-slate-100 w-[15vw]  text-black h-screen hidden md:flex flex-col">
        <SidebarHeader>
          <h1 className="text-lg font-bold">FindMyDocs</h1>
        </SidebarHeader>

        <SidebarBody>
          <SidebarSection>
            <Link to="/dashboard">
              <SidebarItem>
                <HomeRoundedIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Home</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/variables">
              <SidebarItem>
                <TuneRoundedIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Variables</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/create-document">
              <SidebarItem>
                <PostAddIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Create File</SidebarLabel>
              </SidebarItem>
            </Link>
          </SidebarSection>

          <SidebarSpacer className="h-8" />
          <SidebarSection>
            <Link to="/help">
              <SidebarItem>
                <ContactSupportIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Help</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/AI">
              <SidebarItem>
                <SmartToyIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">AI</SidebarLabel>
              </SidebarItem>
            </Link>
          </SidebarSection>
        </SidebarBody>

        {/* Footer */}
        <SidebarFooter>
          <p className="text-xs text-zinc-400 px-4 pb-4">© 2025 FindMyDocs</p>
        </SidebarFooter>
      </Sidebar>

      <nav
        className="
    fixed  bottom-0 left-0 w-full 
     border-t md:hidden z-[999]
    pointer-events-auto bg-white
  "
      >
        {" "}
        <div className="flex justify-around items-center py-2  ">
          <Link to="/dashboard" className="flex flex-col items-center">
            <HomeRoundedIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Home</span>
          </Link>

          <Link to="/variables" className="flex flex-col items-center">
            <TuneRoundedIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Vars</span>
          </Link>

          <Link to="/create-document" className="flex flex-col items-center">
            <PostAddIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Create</span>
          </Link>
          <Link to="/help" className="flex flex-col items-center">
            <ContactSupportIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Help</span>
          </Link>

          <Link to="/AI" className="flex flex-col items-center">
            <SmartToyIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">AI</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
