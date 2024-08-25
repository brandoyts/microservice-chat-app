"use client";

import React from "react";
import Header from "./header";
import ChatInput from "./chat-input";
import useChatSocket from "@/shared/hooks/use-chat-socket";

function Messages() {
  const { sendMessage } = useChatSocket();
  return (
    <div className="w-full flex flex-col h-full justify-between">
      <Header />
      <ChatInput />
    </div>
  );
}

export default Messages;
