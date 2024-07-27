import Image from "next/image";
import React from "react";
import profilePicture from "../../assets/new-profile-picture.png";
import { Button } from "../ui/button";

export default function ProfileDetails() {
  return (
    <div className="w-full bg-white rounded-md">
      <div className="flex flex-col gap-y-4 p-6 border-b border-neutral-100">
        <h1 className="text-lg text-neutral-600">Profile Details</h1>
        <div className="flex gap-x-[26px] items-center">
          <Image src={profilePicture} alt="avatar" width={100} height={100} />
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 items-center">
              <Button>Upload new photo</Button>
              <Button variant="disabled">Reset</Button>
            </div>
            <span className="text-neutral-400 text-sm">
              Allowed JPG, GIF or PNG. Max size of 800K
            </span>
          </div>
        </div>
      </div>
      <div className="h-[400px]"></div>
    </div>
  );
}
