import { LuFuel } from "react-icons/lu";
import { CgPerformance } from "react-icons/cg";
import { TbAutomaticGearbox } from "react-icons/tb";
import { GiArchiveRegister } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";

const ICON_PROPS = { color: "var(--color-light-orange)", size: 32 };

export const specs = {
  mileage: {
    icon: <FaRoad {...ICON_PROPS} />,
    label: "Kilometerstand",
  },
  performance: {
    icon: <CgPerformance {...ICON_PROPS} />,
    label: "Leistung",
  },
  fuelType: {
    icon: <LuFuel {...ICON_PROPS} />,
    label: "Kraftstoffart",
  },
  gearbox: {
    icon: <TbAutomaticGearbox {...ICON_PROPS} />,
    label: "Getriebe",
  },
  initialRegistration: {
    icon: <GiArchiveRegister {...ICON_PROPS} />,
    label: "Erstzulassung",
  },
  ownersCount: {
    spec: "ownersCount",
    icon: <FaRegUser {...ICON_PROPS} />,
    label: "Fahrzeughalter",
  },
};
