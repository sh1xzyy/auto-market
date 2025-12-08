"use client";

import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { useState } from "react";
import { TECHNICAL_DETAILS } from "./temporary/technicalDetails";
import clsx from "clsx";
import { Button } from "@/shared/ui/Button/Button";

export const VehicleTechnicalDetails = ({ technicalDetails }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <ContentCard>
      <h3 className="text-xl font-bold mb-4">Technische Daten</h3>

      <ul className={clsx("overflow-y-hidden", !isListOpen && "max-h-[216px]")}>
        {technicalDetails.map(({ key, value }) => (
          <li
            className="grid grid-cols-2 font-bold h-9 text-md p-[9px] even:bg-black"
            key={key}
          >
            <span>{TECHNICAL_DETAILS[key].label}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>

      <Button
        variant="text"
        text={isListOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
        onClick={() => setIsListOpen((prev) => !prev)}
      />
    </ContentCard>
  );
};
