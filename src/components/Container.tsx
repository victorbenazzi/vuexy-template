import { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
}

export function Container({ children }: ContainerProp) {
  return <div className="w-full max-w-[1128px] ">{children}</div>;
}
