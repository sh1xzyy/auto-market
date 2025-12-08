"use client";

import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { Button } from "@/shared/ui/Button/Button";
import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import clsx from "clsx";
import { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";

export const VehicleEquipment = ({ equipment }) => {
  const { windowWidth } = useWindowWidth();
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <ContentCard>
      <h3 className="text-xl font-bold mb-4">Ausstattung</h3>

      <ul
        className={clsx(
          "lg:grid grid-cols-2 gap-x-4 overflow-y-hidden",
          !isListOpen && "max-h-[228px]"
        )}
      >
        {equipment.map((value, i) => {
          return (
            <li
              className={clsx(
                "flex items-center justify-between font-bold text-md p-[9px] h-9",
                windowWidth < 1014 && "even:bg-black",
                (i % 4 === 2 || i % 4 === 3) && "lg:bg-black"
              )}
              key={i}
            >
              <span>{value}</span>
              <GrFormCheckmark size={22} />
            </li>
          );
        })}
      </ul>

      <Button
        variant="text"
        text={isListOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
        onClick={() => setIsListOpen((prev) => !prev)}
      />
    </ContentCard>
  );
};
