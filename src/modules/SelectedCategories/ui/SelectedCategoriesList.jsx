"use client";

import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import { CustomSwiper } from "@/shared/ui/CustomSwiper/CustomSwiper";
import { SELECTED_CATEGORIES } from "../temporary/selectedCategories";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { VehicleTypeCard } from "@/shared/ui/VehicleTypeCard/VehicleTypeCard";

export const SelectedCategoriesList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { windowWidth } = useWindowWidth();

  return (
    <CustomSwiper
      setActiveIndex={setActiveIndex}
      settings={{
        spaceBetween: 16,
        slidesPerView: 2,
        breakpoints: {
          400: { slidesPerView: 3 },
          600: { slidesPerView: 4 },
          1014: {
            slidesPerView: 4.3,
            spaceBetween: 24,
            slidesPerGroup: 4,
          },
        },
      }}
      showButtons={windowWidth >= 1014}
      showPrevButton={activeIndex > 0}
      showNextButton={activeIndex < SELECTED_CATEGORIES.length - 4}
    >
      {SELECTED_CATEGORIES?.map((item, i) => (
        <SwiperSlide key={i}>
          <VehicleTypeCard item={item} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};
