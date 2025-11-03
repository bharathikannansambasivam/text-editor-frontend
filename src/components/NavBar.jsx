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

import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import PaletteRoundedIcon from "@mui/icons-material/PaletteRounded";

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
            <Link to="/">
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
            <Link to="/settings">
              <SidebarItem>
                <SettingsSuggestRoundedIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Settings</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/themes">
              <SidebarItem>
                <PaletteRoundedIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Theme</SidebarLabel>
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
    fixed bottom-0 left-0 w-full 
    bg-slate-50 border-t md:hidden 
    z-[99999] pointer-events-auto
  "
      >
        {" "}
        <div className="flex justify-around items-center py-2">
          <Link to="/" className="flex flex-col items-center">
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
          <Link to="/settings" className="flex flex-col items-center">
            <SettingsSuggestRoundedIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Settings</span>
          </Link>

          <Link to="/themes" className="flex flex-col items-center">
            <PaletteRoundedIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Theme</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
