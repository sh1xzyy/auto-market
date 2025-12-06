"use client";

import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaRegImage } from "react-icons/fa6";
import { CustomSwiper } from "@/shared/ui/CustomSwiper/CustomSwiper";

export const VehicleImageSwiper = ({ imageData }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const { name, images } = imageData;

  return (
    <CustomSwiper
      setActiveIndex={setActiveIndex}
      variant="rounded"
      settings={{
        spaceBetween: 0,
        slidesPerView: 1,
      }}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            className="max-h-[375px] sm:max-h-[485px] object-cover"
            src={image}
            width={640}
            height={375}
            alt={name}
          />
        </SwiperSlide>
      ))}
      <div className="flex items-center gap-[7px] rounded-md absolute bottom-[2%] right-2 p-[7px] bg-grey-05 z-10">
        <FaRegImage size={16} />
        <span className="font-bold text-sm">
          {activeIndex + 1}/{images.length}
        </span>
      </div>
    </CustomSwiper>
  );
};
