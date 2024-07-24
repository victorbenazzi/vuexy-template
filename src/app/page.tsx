import Image from "next/image";
import { Icon } from "@iconify/react";
import { VerticalMenu } from "@/components/VerticalMenu/VerticalMenu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <main className="flex">
        <aside className="flex flex-col gap-y-[20px] h-screen bg-white w-[260px] py-5 px-[14px]">
          <VerticalMenu />
        </aside>
        <div className="w-full h-screen flex flex-col px-[26px] items-center justify-start bg-neutral-100">
          <Container>
            <p>SearchBar</p>
            <p>Breadcrumb</p>
            <p>PageNavigation</p>
            <p>PageContent</p>
          </Container>
        </div>
      </main>
    </>
  );
}
