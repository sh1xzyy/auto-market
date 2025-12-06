"use client";

import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { PiWarningCircleLight } from "react-icons/pi";

export const Financing = ({ monthlyRate }) => {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-1 mb-2">
        <span className="text-md">ab {monthlyRate} € mtl.</span>
        <IconButton
          className="p-1"
          icon={PiWarningCircleLight}
          size={16}
          onClick={() => console.log("some drop down menu")}
          aria-label="fair drop down button"
        />
      </div>
      <DefaultLink
        variant="text_primary"
        text="Finanzierung berechnen"
        href="/"
      />
    </div>
  );
};
