"use client";

import { CompanyBanner } from "@/modules/CompanyBanner/CompanyBanner";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { vehicleData } from "./temporary/vehicleData";
import { VehicleImageSwiper } from "@/modules/VehicleImageSwiper/VehicleImageSwiper";

const VehicleDetailPage = () => {
  const { windowWidth } = useWindowWidth();
  const { company, name, images } = vehicleData;

  return (
    <div className="lg:py-2">
      <div className="container px-[18px]">
        {windowWidth >= 1014 && <CompanyBanner company={company} />}

        <div className="flex flex-col lg:flex-row lg:gap-[18px]">
          <div>
            <section className="lg:mb-4">
              <VehicleImageSwiper imageData={{ name, images }} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
