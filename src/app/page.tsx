import { VerticalMenu } from "@/components/VerticalMenu/VerticalMenu";
import { Container } from "@/components/Container";
import SearchBar from "@/components/Searchbar/Searchbar";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";

export default function Home() {
  return (
    <>
      <main className="flex relative">
        <aside className="fixed top-0 left-0 flex flex-col gap-y-[20px] h-screen bg-white w-[260px] py-5 px-[14px]">
          <VerticalMenu />
        </aside>
        <div className="w-full flex flex-col px-[26px] py-4 items-center justify-start bg-neutral-100 ml-[260px]">
          <Container className="flex flex-col gap-y-[26px]">
            <SearchBar />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-[22px]">
                    Account Settings
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[22px]">
                    Account
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p>PageNavigation</p>
            <ProfileDetails />
          </Container>
        </div>
      </main>
    </>
  );
}
