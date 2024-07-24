import Image from "next/image";
import Logo from "../../assets/vuexy-logo.svg";
import { Icon } from "@iconify/react";
import MenuItem from "./MenuItem";

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
        <MenuItem IconSimbol="tabler:smart-home" Label="Dashboard" />
      </ul>
    </>
  );
}
