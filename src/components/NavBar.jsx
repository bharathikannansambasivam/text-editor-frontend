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
  FolderIcon,
  PlusCircleIcon,
  VariableIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Sidebar className="bg-slate-50 w-[15vw] text-black h-screen">
      <SidebarHeader>
        <h1 className="text-lg font-bold">FindMyDocs</h1>
      </SidebarHeader>

      <SidebarBody>
        <SidebarSection>
          <Link to="/">
            <SidebarItem className="">
              <HomeIcon className="w-5 h-5 text-black  " />
              <SidebarLabel className="text-black">Home</SidebarLabel>
            </SidebarItem>
          </Link>

          <Link to="/create-document">
            <SidebarItem>
              <PlusCircleIcon className="w-5 h-5 text-black" />
              <SidebarLabel className="text-black">Create File</SidebarLabel>
            </SidebarItem>
          </Link>
          <Link to="/variables">
            <SidebarItem>
              <VariableIcon className="w-5 h-5 text-black" />
              <SidebarLabel className="text-black">Variables</SidebarLabel>
            </SidebarItem>
          </Link>
        </SidebarSection>

        <SidebarSpacer />

        <SidebarSection>
          <SidebarItem>
            <Cog6ToothIcon className="w-5 h-5 text-black" />
            <SidebarLabel className="text-black">Settings</SidebarLabel>
          </SidebarItem>

          <SidebarItem>
            <QuestionMarkCircleIcon className="w-5 h-5 text-black" />
            <SidebarLabel className="text-black">Help</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>

      <SidebarFooter>
        <p className="text-xs text-zinc-400">© 2025 My App</p>
      </SidebarFooter>
    </Sidebar>
  );
}

export default NavBar;
