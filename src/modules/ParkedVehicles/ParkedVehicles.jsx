import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { Header } from "./ui/Header/Header";
import { Vehicles } from "./ui/Vehicles/Vehicles";

export const ParkedVehicles = () => {
  return (
    <div className="container">
      <ContentCard variant="primary">
        <Header />
        <Vehicles />
      </ContentCard>
    </div>
  );
};
