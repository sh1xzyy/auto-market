"use client";

import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { useState } from "react";
import { PARKED_VEHICLES } from "../../temporary/parkedVehicles";
import { SwiperSlide } from "swiper/react";
import VehicleCard from "@/shared/ui/VehicleCard/VehicleCard";
import { CustomSwiper } from "@/shared/ui/CustomSwiper/CustomSwiper";

export const Vehicles = () => {
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
      {PARKED_VEHICLES?.map((item, i) => (
        <SwiperSlide key={i}>
          <VehicleCard item={item} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};
