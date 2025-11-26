"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { userDesktopNav, userTabletNav } from "../../data/userNav";
import { IconLink } from "@/shared/ui/IconLink/IconLink";

export const UserNavigationList = () => {
  const { windowWidth } = useWindowWidth();
  const [openIndex, setOpenIndex] = useState(null);

  const navigationList =
    windowWidth >= 1014
      ? userDesktopNav
      : windowWidth > 755 && windowWidth < 1014
      ? userTabletNav
      : [];

  return (
    <ul className="flex">
      {navigationList.map((item, i) => (
        <li className="relative" key={i}>
          {item?.type === "link" ? (
            <IconLink
              className="block p-[9px]"
              href={item.src}
              aria-label={item.ariaLabel}
              Icon={item.icon}
            />
          ) : (
            <IconButton
              className="flex items-center justify-center gap-1 p-[9px]"
              onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
              icon={item.icon}
              aria-label={item.ariaLabel}
            >
              {windowWidth > 755 && windowWidth < 1014 && i === 1 && (
                <IoIosArrowDown
                  className={clsx(
                    "fill-light-grey transition linear duration-300 group-hover:fill-light-white",
                    openIndex === i && "rotate-180"
                  )}
                  size={16}
                />
              )}
            </IconButton>
          )}
        </li>
      ))}
    </ul>
  );
};
