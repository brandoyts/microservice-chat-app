import { cn } from "@/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { SendIcon, UploadIcon } from "lucide-react";
import React from "react";

function ChatInput() {
  return (
    <div className="border-t p-6 flex gap-3">
      <Button
        variant="outline"
        className="flex gap-1 rounded-full items-center justify-center   font-bold"
      >
        <UploadIcon className="w-5 h-4" />
        <span>Upload files</span>
      </Button>
      <Input
        className="h-10 outline-none border-none text-muted-foreground"
        placeholder="Type a message..."
      />
      <Button className="rounded-full">
        <SendIcon />
      </Button>
    </div>
  );
}

export default ChatInput;
