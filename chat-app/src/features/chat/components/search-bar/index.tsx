import { Input } from "@/shared/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="relative w-full text-muted-foreground outline-none ">
      <Input
        className="pr-9 w-full h-full outline-none border-none rounded-full bg-[#F6F6F6] "
        placeholder="Search"
      />
      <Search className="absolute right-0 top-0 m-2 h-4 w-4 text-muted-foreground cursor-pointer" />
    </div>
  );
}

export default SearchBar;
