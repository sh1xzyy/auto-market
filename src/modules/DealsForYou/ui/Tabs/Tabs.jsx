import { Button } from "@/shared/ui/Button/Button";
import { CustomSwiper } from "@/shared/ui/CustomSwiper/CustomSwiper";
import { GrFormCheckmark } from "react-icons/gr";
import { MdEnergySavingsLeaf, MdOutlineSell } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import { TbStars } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";

export const BUTTONS = [
  {
    Icon: <MdOutlineSell className="mr-2" size={16} />,
    text: "Top-Preis",
  },
  {
    Icon: <TfiWallet className="mr-2" size={16} />,
    text: "Leasing",
  },
  {
    Icon: <MdEnergySavingsLeaf className="mr-2" size={16} />,
    text: "Elektro",
  },
  {
    Icon: <TbStars className="mr-2" size={16} />,
    text: "Neuwagen",
  },
];

export const Tabs = ({ openIndex, setOpenIndex }) => {
  return (
    <CustomSwiper
      variant="primary"
      showButtons={false}
      settings={{
        spaceBetween: 8,
        slidesPerView: BUTTONS.length - 0.5,
      }}
    >
      {BUTTONS?.map(({ Icon, text }, i) => (
        <SwiperSlide className="w-fit!" key={i}>
          <Button
            variant="tag"
            Icon={Icon}
            text={text}
            condition={
              openIndex === i
                ? "bg-black hover:bg-grey"
                : "bg-background-light-black border-2 border-black hover:border-grey"
            }
            onClick={() => setOpenIndex(i)}
          >
            {openIndex === i && <GrFormCheckmark size={20} />}
          </Button>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};
