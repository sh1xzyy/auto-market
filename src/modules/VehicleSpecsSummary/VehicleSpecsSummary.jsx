import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { vehicleSpecs } from "./temporary/vehicleSpecs";
import { specs } from "./temporary/specs";

export const VehicleSpecsSummary = () => {
  return (
    <ContentCard>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {vehicleSpecs.map(({ spec, value, id }) => (
          <li className="flex py-1 gap-2" key={id}>
            {specs[spec].icon}
            <div className="flex flex-col">
              <span className="text-sm text-dark-grey">
                {specs[spec].label}
              </span>
              <span className="text-md font-bold">{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </ContentCard>
  );
};
