import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function SearchbarAvatar() {
  return (
    <div className="cursor-pointer relative">
      <div className="w-[12px] h-[12px] bg-green-500 rounded-full absolute bottom-0 right-0 border-[3px] border-white z-50"></div>
      <Avatar>
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>VB</AvatarFallback>
      </Avatar>
    </div>
  );
}
