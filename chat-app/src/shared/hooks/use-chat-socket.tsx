"use client";

import { SEND_MESSAGE } from "@/lib/constants";
import { SendMessage } from "@/lib/types";
import { useCallback, useEffect } from "react";
import { io } from "socket.io-client";

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_SERVER as string;
const socket = io(socketUrl, {
  withCredentials: true,
});

const useChatSocket = () => {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = useCallback((message: SendMessage) => {
    console.log(message);
    socket.emit(SEND_MESSAGE, message);
  }, []);

  return {
    sendMessage,
  };
};

export default useChatSocket;
