"use client";

import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { IoShareSocial } from "react-icons/io5";

export const DetailsHeader = ({ details, isDesktop }) => {
  const { name, description } = details;

  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="font-bold mb-1">{name}</h2>
        <p className="line-clamp-1" title={description}>
          {description}
        </p>
      </div>
      {!isDesktop && (
        <IconButton
          icon={IoShareSocial}
          size={16}
          className="flex items-center justify-center w-[50px] h-11 border border-super-light-violet rounded-md hover:border-light-violet"
          iconClassName="group-hover:fill-light-violet"
          onClick={() => console.log("on share button clicked")}
        />
      )}
    </div>
  );
};
