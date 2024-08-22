import { cn } from "@/lib/utils";
import React from "react";
import SearchBar from "../search-bar";
import ContactList from "../contact-list";

const stylesForSmallScreen = () => {
  return "hidden";
};

const stylesForDesktop = () => {
  return "lg:block";
};

function Sidebar() {
  return (
    <div
      className={cn(
        "relative w-[450px] border-r max-h-full flex flex-col overflow-scroll scrollbar-hide",
        stylesForSmallScreen(),
        stylesForDesktop()
      )}
    >
      <div className="p-6 sticky top-0 bg-white z-10">
        <SearchBar />
      </div>
      <ContactList />
    </div>
  );
}

export default Sidebar;
