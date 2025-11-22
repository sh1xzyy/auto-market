import { FaRegBell, FaRegStar } from "react-icons/fa";
import { RiParkingBoxLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

const iconsStyle =
  "fill-light-grey transition linear duration-300 group-hover:fill-light-white";

export const userDesktopNav = [
  {
    type: "button",
    icon: FaRegBell,
    ariaLabel: "Notifications button",
  },
  {
    type: "link",
    src: "",
    icon: <FaRegStar key="star" className={iconsStyle} size={20} />,
    ariaLabel: "my favorites link",
  },
  {
    type: "link",
    src: "",
    icon: <RiParkingBoxLine key="parking" className={iconsStyle} size={20} />,
    ariaLabel: "parking link",
  },
];

export const userTabletNav = [
  {
    type: "button",
    icon: FaRegBell,
    ariaLabel: "Notifications button",
  },
  {
    type: "button",
    icon: FaRegUserCircle,
    ariaLabel: "Profile button",
  },
];
