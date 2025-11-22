"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";
import { navigation } from "../../data/navigation";
import { DropDownMenu } from "../DropDown/DropDownMenu/DropDownMenu";
import { DropDownMainList } from "../DropDown/DropDownMainList/DropDownMainList";
import { searchDropDownMenu } from "../../data/searchDropDownMenu";
import { sellDropDownMenu } from "../../data/sellDropDownMenu";
import { infoDropDownMenu } from "../../data/infoDropDownMenu";

const dropDownByIndex = [
  searchDropDownMenu,
  sellDropDownMenu,
  infoDropDownMenu,
];

export const MainNavigationList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="flex gap-2.5">
      {navigation.map((title, i) => {
        return (
          <li className="relative" key={i}>
            <button
              className="group flex gap-1 items-center h-9 font-bold p-[7px] transition linear duration-300 hover:text-light-white"
              type="button"
              onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
            >
              <span>{title}</span>
              <IoIosArrowDown
                className={clsx(
                  "fill-light-grey transition linear duration-300 group-hover:fill-light-white",
                  openIndex === i && "rotate-180"
                )}
                size={16}
              />
            </button>

            {openIndex === i && (
              <DropDownMenu variant="main">
                <DropDownMainList list={dropDownByIndex[i]} />
              </DropDownMenu>
            )}
          </li>
        );
      })}
    </ul>
  );
};
