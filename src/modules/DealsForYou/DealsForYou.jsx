"use client";

import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { useState } from "react";
import { Tabs } from "./ui/Tabs/Tabs";
import { Deals } from "./ui/Deals/Deals";

export const DealsForYou = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container">
      <ContentCard variant="primary">
        <h2 className="font-extrabold leading-8 mb-4 text-xl">
          Deals für Dich
        </h2>
        <Tabs openIndex={openIndex} setOpenIndex={setOpenIndex} />
        <Deals openIndex={openIndex} />
      </ContentCard>
    </div>
  );
};
