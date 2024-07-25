import Image from "next/image";
import Logo from "../../assets/vuexy-logo.svg";
import { Icon } from "@iconify/react";
import MenuItem from "./MenuItem";

interface menuItemDataType {
  Icon: string;
  Label: string;
}
const menuItemData = [
  {
    Icon: "tabler:smart-home",
    Label: "Dashboard",
  },
  {
    Icon: "tabler:layout-sidebar",
    Label: "Layouts",
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
        {menuItemData.map((item: menuItemDataType, index: number) => (
          <MenuItem IconSimbol={item.Icon} Label={item.Label} key={index} />
        ))}
      </ul>
    </>
  );
}
