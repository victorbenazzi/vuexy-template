import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import SearchbarAvatar from "./SearchbarAvatar";

export default function SearchBar() {
  return (
    <div className=" flex items-center justify-between w-full max-h-[62px] bg-white px-6 py-3 rounded-md">
      <div className="flex items-center gap-x-2">
        <Icon icon="tabler:search" width={26} className="text-neutral-600" />
        <Input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="border-none placeholder:text-[15px] flex-grow"
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <Icon icon="circle-flags:us" width={26} className="cursor-pointer" />
        <Icon
          icon="tabler:moon-stars"
          width={26}
          className="text-neutral-600 cursor-pointer hover:text-primary"
        />
        <Icon
          icon="tabler:layout-grid-add"
          width={26}
          className="text-neutral-600 cursor-pointer hover:text-primary"
        />
        <div className="relative cursor-pointer group">
          <span className="absolute -top-1 -right-[3px] w-[18px] h-[18px] bg-red-500 text-[12px] text-white rounded-full flex items-center justify-center leading-none">
            4
          </span>
          <Icon
            icon="tabler:bell"
            width={26}
            className="text-neutral-600 group-hover:text-primary"
          />
        </div>
        <SearchbarAvatar />
      </div>
    </div>
  );
}
