import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import useChatSocket from "@/shared/hooks/use-chat-socket";
import { SendIcon, UploadIcon } from "lucide-react";
import React, { FormEvent, useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChatSocket();

  const handleSubmitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }

    sendMessage({
      from: "Brando Endona",
      to: "John Doe",
      body: message,
    });

    setMessage("");
  };

  return (
    <div className="border-t p-6 flex gap-3">
      <form className="flex w-full" onSubmit={(e) => handleSubmitMessage(e)}>
        <Button
          variant="outline"
          className="flex gap-1 rounded-full items-center justify-center   font-bold"
        >
          <UploadIcon className="w-5 h-4" />
          <span>Upload files</span>
        </Button>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-10 outline-none border-none text-muted-foreground"
          placeholder="Type a message..."
        />
        <Button className="rounded-full" type="submit">
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
