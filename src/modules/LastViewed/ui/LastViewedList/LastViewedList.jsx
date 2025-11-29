"use client";

import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import { LAST_VIEWED } from "../../temporary/lastViewed";
import { CustomSwiper } from "@/shared/ui/CustomSwiper/CustomSwiper";
import VehicleCard from "@/shared/ui/VehicleCard/VehicleCard";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";

export const LastViewedList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { windowWidth } = useWindowWidth();

  return (
    <CustomSwiper
      setActiveIndex={setActiveIndex}
      settings={{
        spaceBetween: 16,
        slidesPerView: 1,
        breakpoints: {
          400: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1014: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      }}
      showButtons={windowWidth >= 1014}
      showPrevButton={activeIndex > 0}
    >
      {LAST_VIEWED?.map((item, i) => (
        <SwiperSlide key={i}>
          <VehicleCard item={item} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};
