import { MdEnergySavingsLeaf, MdFrontLoader } from "react-icons/md";
import { PiTruck, PiWarningCircleLight } from "react-icons/pi";
import { HiMiniTruck } from "react-icons/hi2";
import { FaBus, FaTractor, FaTruckMoving, FaTrailer } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";

const FILTER_ACTIONS = {
  id: "filterActions",
  type: "filterActions",
};

const ICON_BUTTON = {
  id: "other",
  type: "iconButton",
};

const CATEGORY = {
  id: "category",
  name: "category",
  label: "Kategorie",
  type: "selector",
};

const BRAND = {
  id: "brand",
  name: "brand",
  label: "Marke",
  type: "selector",
};

const MODEL = {
  id: "model",
  name: "model",
  label: "Modell",
  type: "selector",
};

const YEAR = {
  id: "year",
  name: "year",
  label: "Erstzulassung ab",
  type: "selector",
};

const LOCATION = {
  id: "location",
  name: "location",
  label: "Ort oder PLZ",
  type: "selector",
};

const PRICE = {
  id: "price_until",
  name: "price_until",
  label: "Preis bis",
  type: "selector",
};

const MILEAGE = {
  id: "mileage_until",
  name: "mileage_until",
  label: "Kilometer bis",
  type: "selector",
};

export const passengerCar = [
  BRAND,
  MODEL,
  YEAR,
  MILEAGE,
  {
    id: "payment_method",
    label: "Zahlungsart",
    type: "radio",
  },
  PRICE,
  LOCATION,
  {
    id: "isElectric",
    name: "isElectric",
    label: "Nur Elektroautos",
    type: "checkbox",
    icon: <MdEnergySavingsLeaf color="var(--color-blue)" size={16} />,
  },
  {
    id: "submit_button",
    type: "submit",
  },
  { ...FILTER_ACTIONS, href: "/auto/more-filters" },
];

export const motorBikes = [
  {
    ...CATEGORY,
    label: "Kategorie",
  },
  BRAND,
  MODEL,
  YEAR,
  MILEAGE,
  PRICE,
  LOCATION,
  {
    id: "submit_button",
    type: "submit",
  },
  { ...FILTER_ACTIONS, href: "/motorcycle/more-filters" },
  ,
];

export const eBikes = [
  {
    ...CATEGORY,
    label: "E-Bike Kategorie",
  },
  BRAND,
  MODEL,
  {
    id: "frameSize_eBike",
    name: "frameSize",
    label: "Rahmengröße",
    labelIcon: PiWarningCircleLight,
    ariaLabel: "frame size",
    type: "selector",
  },
  {
    id: "batteryCapacity_eBike",
    name: "batteryCapacity",
    label: "Akkukapazität ab",
    labelIcon: PiWarningCircleLight,
    ariaLabel: "battery capacity",
    type: "selector",
  },
  PRICE,
  LOCATION,
  {
    id: "submit_button",
    type: "submit",
  },
  { ...FILTER_ACTIONS, href: "/e-bikes/more-filters" },
  ,
];

export const miniTrucks = [
  {
    ...CATEGORY,
    label: "Kategorie",
  },
  BRAND,
  MODEL,
  YEAR,
  MILEAGE,
  PRICE,
  LOCATION,
  {
    id: "submit_button",
    type: "submit",
  },
  { ...FILTER_ACTIONS, href: "/mini-trucks/more-filters" },
  ,
];

export const otherVehicles = [
  BRAND,
  MODEL,
  YEAR,
  MILEAGE,
  {
    id: "pricing_other_vehicles",
    label: "Preisangabe",
    type: "radio",
    radioList: [
      {
        id: "pricing_other_vehicles_brutto",
        name: "pricing",
        value: "brutto",
        label: "Brutto",
        type: "radio",
      },
      {
        id: "pricing_other_vehicles_netto",
        name: "pricing",
        value: "netto",
        label: "Netto",
        type: "radio",
      },
    ],
  },
  PRICE,
  LOCATION,
  {
    id: "submit_button",
    type: "submit",
  },
  { ...FILTER_ACTIONS, href: "/motorcycle/more-filters" },
];

export const other = [
  {
    ...ICON_BUTTON,
    id: "lkw",
    label: "Lkw über 7,5 t",
    icon: <PiTruck color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "trailer",
    label: "Anhänger",
    icon: <FaTrailer color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "transporter",
    label: "Transporter bis 7,5 t",
    icon: <HiMiniTruck color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "semi-trailer_1",
    label: "Sattelzüge",
    icon: <FaTruckMoving color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "semi-trailer_2",
    label: "Auflieger",
    icon: <FaTrailer color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "Buses",
    label: "Busse",
    icon: <FaTruckMoving color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "agricultural",
    label: "Agrar",
    icon: <FaTractor color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "construction_machinery",
    label: "Baumaschinen",
    icon: <IoIosConstruct color="var(--color-light-orange)" size={45} />,
  },
  {
    ...ICON_BUTTON,
    id: "stacker",
    label: "Stapler",
    icon: <MdFrontLoader color="var(--color-light-orange)" size={45} />,
  },
];
