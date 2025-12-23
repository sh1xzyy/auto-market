import { IoMdClose } from "react-icons/io";
import { BurgerNavMenuList } from "./ui/BurgerNavMenuList/BurgerNavMenuList";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { routes } from "@/shared/constants/routes";

export const BurgerMenu = ({ setIsBurgerMenuOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-overlay z-10">
      <div className="fixed right-0 top-0 h-full w-[260px] bg-background-light-black flex flex-col">
        <button
          className="flex items-center justify-between px-[18px] py-6"
          type="button"
          onClick={() => setIsBurgerMenuOpen(false)}
        >
          <span className="font-bold">Menü schließen</span>
          <IoMdClose
            className="fill-light-grey transition-colors duration-300 group-hover:fill-light-white"
            size={20}
          />
        </button>
        <BurgerNavMenuList />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-[18px] pb-6 bg-background-light-black">
          <DefaultLink
            variant="primary"
            href={routes.auth.base}
            text="Anmelden"
          />
        </div>
      </div>
    </div>
  );
};
