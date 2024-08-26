"use client";

import { SEND_MESSAGE, TYPING } from "@/lib/constants";
import { SendMessage } from "@/lib/types";
import { useCallback, useEffect } from "react";
import { io } from "socket.io-client";

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_SERVER as string;
const socket = io(socketUrl, {
  withCredentials: true,
  autoConnect: false,
});

const useChatSocket = () => {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = useCallback((message: SendMessage) => {
    socket.emit(SEND_MESSAGE, message);
  }, []);

  const onTyping = useCallback(() => {
    socket.emit(TYPING);
  }, []);

  const isTyping = useCallback(() => {
    socket.on(TYPING, () => {
      console.log("someone is typing...");
    });
  }, []);

  return {
    sendMessage,
    onTyping,
    isTyping,
  };
};

export default useChatSocket;
