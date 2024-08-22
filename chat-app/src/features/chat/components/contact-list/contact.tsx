import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import React from "react";

type ContactProps = {
  userName: string;
};

function Contact({ userName }: ContactProps) {
  return (
    <div className="flex  w-full p-3 items-center gap-2 cursor-pointer hover:bg-gray-100">
      <Avatar>
        <AvatarFallback>as</AvatarFallback>
      </Avatar>
      <span>{userName}</span>
      <small className="justify-end">2:34 PM</small>
    </div>
  );
}

export default Contact;
