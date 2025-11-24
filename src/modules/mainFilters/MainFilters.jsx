"use client";

import { useState } from "react";
import VehiclesList from "./ui/VehiclesList.jsx";

export const MainFilters = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isOtherFiltersOpen, setIsOtherFiltersOpen] = useState(false);

  return (
    <div className="container">
      <div className="md:flex w-full border border-grey lg:rounded-2xl">
        <VehiclesList
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          setIsOtherFiltersOpen={setIsOtherFiltersOpen}
        />
      </div>
    </div>
  );
};
