import Image from "next/image";
import Logo from "../../assets/vuexy-logo.svg";
import { Icon } from "@iconify/react";
import MenuItem from "./MenuItem";

interface menuItemDataType {
  Icon: string;
  Label: string;
}
const HeadermenuItemData = [
  {
    Icon: "tabler:smart-home",
    Label: "Dashboard",
  },
  {
    Icon: "tabler:layout-sidebar",
    Label: "Layouts",
  },
];
const menuItemData = [
  {
    Icon: "tabler:shopping-cart",
    Label: "eCommerce",
  },
  {
    Icon: "tabler:book-2",
    Label: "Academy",
  },
  {
    Icon: "tabler:truck",
    Label: "Logistics",
  },
  {
    Icon: "tabler:users",
    Label: "Users",
  },
];

export function VerticalMenu() {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <Image src={Logo} alt="Logo Vuexy" width={110} height={24} priority />
        <Icon
          icon="tabler:circle-dot"
          width={20}
          className="text-neutral-600"
        />
      </div>
      <ul>
        {HeadermenuItemData.map((item: menuItemDataType, index: number) => (
          <MenuItem IconSimbol={item.Icon} Label={item.Label} key={index} />
        ))}
      </ul>
      <ul>
        <span className="px-4 text-[11px] text-neutral-500 leading-[14px] ">
          APPLICATION
        </span>
        {menuItemData.map((item: menuItemDataType, index: number) => (
          <MenuItem IconSimbol={item.Icon} Label={item.Label} key={index} />
        ))}
      </ul>
    </>
  );
}
