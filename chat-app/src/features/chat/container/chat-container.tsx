import { cn } from "@/lib/utils";
import React from "react";
import Sidebar from "../components/sidebar";
import Messages from "../components/messages";

function ChatContainer() {
  return (
    <div
      className={cn(
        "w-full rounded-md flex overaflow-hidden border min-h-full max-w-[2000px]"
      )}
    >
      <Sidebar />
      <Messages />
    </div>
  );
}

export default ChatContainer;
