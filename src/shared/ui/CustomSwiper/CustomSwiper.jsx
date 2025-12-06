import { Swiper } from "swiper/react";
import "swiper/css";
import { ActionButton } from "./ui/ActionButton/ActionButton";
import clsx from "clsx";

export const CustomSwiper = ({
  variant,
  children,
  setActiveIndex,
  settings,
  showButtons = true,
  showPrevButton = true,
  showNextButton = true,
}) => {
  const variants = {
    primary: "mb-2 lg:mb-4",
    rounded: "sm:max-w-[640px] lg:rounded-lg",
  };

  return (
    <Swiper
      className={clsx("relative w-full", variants[variant])}
      onSlideChange={(swiper) =>
        setActiveIndex && setActiveIndex(swiper.activeIndex)
      }
      {...settings}
    >
      {children}
      {showButtons && (
        <>
          {showPrevButton && <ActionButton type="prev" />}
          {showNextButton && <ActionButton type="next" />}
        </>
      )}
    </Swiper>
  );
};
