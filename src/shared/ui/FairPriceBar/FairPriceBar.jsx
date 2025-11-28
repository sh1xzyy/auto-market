import clsx from "clsx";

const LABELS = {
  5: "Sehr guter Preis",
  4: "Guter Preis",
  3: "Fairer Preis",
  2: "Erhöhter Preis",
  1: "Preis ist zu hoch",
  0: "Ohne Bewertung",
};

const COLORS = {
  1: "bg-dark-orange",
  2: "bg-light-yellow",
  3: "bg-light-green",
  4: "bg-dark-green",
  5: "bg-super-dark-green",
};

export const FairPriceBar = ({ fairPrice, className }) => {
  const arr = Array.from({ length: 5 });
  const activeColor = COLORS[fairPrice];

  return (
    <div>
      <div className="flex items-center gap-1">
        {arr.map((_, i) => (
          <span
            className={clsx(className, i < fairPrice ? activeColor : "bg-grey")}
            key={i}
          ></span>
        ))}
      </div>
      <span className="text-sm font-bold text-dark-grey">
        {LABELS[fairPrice]}
      </span>
    </div>
  );
};
