import useChatSocket from "@/shared/hooks/use-chat-socket";
import React, { useEffect } from "react";

function Header() {
  const { isTyping } = useChatSocket();

  useEffect(() => {
    isTyping();
  }, []);

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex items-center gap-2">
        <span>Brando Endona</span>
      </div>
    </div>
  );
}

export default Header;
