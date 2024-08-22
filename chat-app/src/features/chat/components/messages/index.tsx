import React from "react";
import Header from "./header";
import Footer from "./footer";
import ChatInput from "./chat-input";

function Messages() {
  return (
    <div className="w-full flex flex-col h-full justify-between">
      <Header />
      <ChatInput />
    </div>
  );
}

export default Messages;
