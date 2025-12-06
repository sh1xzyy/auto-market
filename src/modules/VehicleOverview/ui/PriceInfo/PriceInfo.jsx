"use client";

import { PiWarningCircleLight } from "react-icons/pi";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { FairPriceBar } from "@/shared/ui/FairPriceBar/FairPriceBar";

export const PriceInfo = ({ priceData }) => {
  const { grossPrice, fairPrice, netPrice } = priceData;

  return (
    <div className="mb-4">
      <div className="flex items-center gap-4">
        <span className="text-xl font-black">{grossPrice} €</span>
        <div className="flex gap-[9px]">
          <FairPriceBar fairPrice={fairPrice} className="w-[17px] h-2" />
          <IconButton
            icon={PiWarningCircleLight}
            size={16}
            onClick={() => console.log("some drop down menu")}
            aria-label="fair drop down button"
          />
        </div>
      </div>
      <span className="text-sm text-dark-grey">
        {netPrice} € (Netto), 19% MwSt.
      </span>
    </div>
  );
};
