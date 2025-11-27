import { GrFormCheckmark } from "react-icons/gr";

export const ADVENTURES = [
  "Geparkte Fahrzeuge überall verfügbar",
  "Suchen speichern",
  "Immer die neusten Angebote erhalten",
];

export const Benefits = () => {
  return (
    <div className="p-9">
      <h3 className="text-xl font-bold mb-[18px] md:max-w-[75%]">
        Deine Vorteile mit einem mobile.de Konto
      </h3>

      <ul className="flex flex-col gap-[9px]">
        {ADVENTURES.map((text, i) => (
          <li className="flex items-center gap-[9px]" key={i}>
            <GrFormCheckmark color="var(--color-light-green)" size={24} />
            <span className="font-bold">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
