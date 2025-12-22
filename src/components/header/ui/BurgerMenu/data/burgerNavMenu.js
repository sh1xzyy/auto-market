import { counselor, toKnow } from "./infoMenu";
import { buy, overview, sell } from "./myAuto";
import { services, vehicleSearch } from "./searchMenu";
import { dealerAreaList, privateAndCommercialList } from "./sellMenu";

export const burgerNavMenu = [
  { title: "Mein mobile.de", list: [overview, buy, sell] },
  { title: "Suchen", list: [vehicleSearch, services] },
  { title: "Verkaufen", list: [privateAndCommercialList, dealerAreaList] },
  { title: "Informieren", list: [toKnow, counselor] },
];
