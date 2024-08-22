import { cn } from "@/lib/utils";
import React from "react";
import ChatInput from "./chat-input";

function Footer() {
  return (
    <div className={cn("border-t p-6")}>
      <ChatInput />
    </div>
  );
}

export default Footer;
