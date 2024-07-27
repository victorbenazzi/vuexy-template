import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProp {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProp) {
  return (
    <div className={twMerge("w-full max-w-[1128px]", className)}>
      {children}
    </div>
  );
}
