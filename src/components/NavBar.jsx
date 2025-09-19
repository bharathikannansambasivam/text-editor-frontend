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

import {
  HomeIcon,
  SwatchIcon,
  PlusCircleIcon,
  VariableIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
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
                <HomeIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Home</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/variables">
              <SidebarItem>
                <VariableIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Variables</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/create-document">
              <SidebarItem>
                <PlusCircleIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Create File</SidebarLabel>
              </SidebarItem>
            </Link>
          </SidebarSection>

          <SidebarSpacer className="h-8" />

          <SidebarSection>
            <Link to="/settings">
              <SidebarItem>
                <Cog6ToothIcon className="w-5 h-5 text-black" />
                <SidebarLabel className="text-black">Settings</SidebarLabel>
              </SidebarItem>
            </Link>

            <Link to="/themes">
              <SidebarItem>
                <SwatchIcon className="w-5 h-5 text-black" />
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
            <HomeIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Home</span>
          </Link>

          <Link to="/variables" className="flex flex-col items-center">
            <VariableIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Vars</span>
          </Link>

          <Link to="/create-document" className="flex flex-col items-center">
            <PlusCircleIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Create</span>
          </Link>
          <Link to="/settings" className="flex flex-col items-center">
            <Cog6ToothIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Settings</span>
          </Link>

          <Link to="/help" className="flex flex-col items-center">
            <SwatchIcon className="w-6 h-6 text-black" />
            <span className="text-xs text-black">Theme</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
