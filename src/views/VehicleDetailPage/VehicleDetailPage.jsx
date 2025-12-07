"use client";

import { CompanyBanner } from "@/modules/CompanyBanner/CompanyBanner";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { vehicleData } from "./temporary/vehicleData";
import { VehicleImageSwiper } from "@/modules/VehicleImageSwiper/VehicleImageSwiper";
import { VehicleOverview } from "@/modules/VehicleOverview";
import { GoBackButton } from "@/shared/ui/GoBackButton/GoBackButton";
import { VehicleSpecsSummary } from "@/modules/VehicleSpecsSummary";

const VehicleDetailPage = () => {
  const { windowWidth } = useWindowWidth();
  const { company, name, images } = vehicleData;

  return (
    <div className="lg:py-2">
      <div className="container lg:px-[18px]">
        {windowWidth >= 1014 && <CompanyBanner company={company} />}
        {windowWidth >= 1014 && <GoBackButton />}

        <div className="flex flex-col lg:flex-row lg:gap-[18px]">
          <div>
            <section className="lg:mb-4">
              <VehicleImageSwiper imageData={{ name, images }} />
            </section>

            {windowWidth < 1014 && (
              <section className="mb-4">
                <VehicleOverview vehicleData={vehicleData} />
              </section>
            )}

            <section className="mb-4">
              <VehicleSpecsSummary />
            </section>
          </div>

          {windowWidth >= 1014 && (
            <section>
              <VehicleOverview vehicleData={vehicleData} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
