import { routes } from "@/shared/constants/routes";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";

export const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-extrabold leading-8 text-xl">Geparkte Fahrzeuge</h2>
      <DefaultLink variant="textNormal" href={routes} text="Alle anzeigen" />
    </div>
  );
};
