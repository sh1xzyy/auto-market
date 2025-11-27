"use client";

import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { routes } from "@/shared/constants/routes";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MainNavigationList } from "./ui/MainNavigationList/MainNavigationList";
import { UserNavigationList } from "./ui/UserNavigationList/UserNavigationList";
import { Logo } from "@/shared/ui/Logo/Logo";

export const Header = () => {
  const { windowWidth } = useWindowWidth();
  const pathname = usePathname();
  const isPathAuth = pathname === routes.auth.base;

  return (
    <>
      <div className="flex items-center h-[72px] bg-background-light-black">
        <div className="container px-[18px]">
          <nav className="flex items-center justify-between">
            <Logo />

            {windowWidth <= 755 && !isPathAuth && (
              <div>
                {windowWidth > 575 && (
                  <IconButton
                    icon={FaRegBell}
                    className="p-[9px]"
                    aria-label="Notifications button"
                  />
                )}
                <IconButton
                  icon={GiHamburgerMenu}
                  className="p-[9px]"
                  aria-label="Burger Menu button"
                />
              </div>
            )}

            {windowWidth > 755 && !isPathAuth && (
              <>
                <MainNavigationList />
                <div className="flex items-center gap-4">
                  <UserNavigationList />
                  {windowWidth >= 1014 && (
                    <DefaultLink
                      variant="primary"
                      href={routes.auth.base}
                      text="Anmelden"
                    />
                  )}
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};
