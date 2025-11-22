"use client";

import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { Logo } from "./ui/Logo/Logo";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { routes } from "@/shared/constants/routes";

export const Header = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <div className="flex items-center h-[72px] bg-background-light-black">
        <div className="container px-[18px]">
          <nav className="flex items-center justify-between">
            <Logo />

            {windowWidth > 755 && (
              <>
                <div className="flex items-center">
                  <DefaultLink
                    variant="primary"
                    href={routes.auth}
                    text="Anmelden"
                  />
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};
