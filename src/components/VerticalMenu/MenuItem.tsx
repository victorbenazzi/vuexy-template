import { Icon } from "@iconify/react";

interface MenuItemProps {
  IconSimbol: string;
  Label: string;
}

export default function MenuItem({ IconSimbol, Label }: MenuItemProps) {
  return (
    <li className="mt-1">
      <a
        href="#"
        className="flex items-center w-full justify-between text-neutral-600 px-4 py-2 rounded-[6px] hover:bg-neutral-100 cursor-pointer">
        <div className="flex items-center gap-x-2">
          <Icon icon={IconSimbol} width={22} />
          {Label}
        </div>
        <Icon icon="tabler:chevron-right" width={18} />
      </a>
    </li>
  );
}
