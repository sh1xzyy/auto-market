"use client";

import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { useSwiper } from "swiper/react";

export const ActionButton = ({ type }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (type === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  const ariaLabelByType = `${type === "next" ? "next" : "prev"} slide button`;
  const iconStylesByType = type === "next" ? "-rotate-90" : "rotate-90";

  return (
    <IconButton
      className={clsx(
        "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-[50%] bg-background-dark-black",
        type === "next" ? "right-2" : "left-2"
      )}
      icon={IoIosArrowDown}
      iconClassName={iconStylesByType}
      size={24}
      onClick={handleClick}
      aria-label={ariaLabelByType}
    />
  );
};
