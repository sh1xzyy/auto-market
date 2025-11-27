"use client";

import { useState } from "react";
import { Tabs } from "../ui/Tabs/Tabs";

export const AuthLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="md:grid md:grid-cols-2 md:gap-[18px]">
      <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};
