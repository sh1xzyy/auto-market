"use client";

import { CompanyBanner } from "@/modules/CompanyBanner/CompanyBanner";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { vehicleData } from "./temporary/vehicleData";

const VehicleDetailPage = () => {
  const { windowWidth } = useWindowWidth();
  const { company } = vehicleData;

  return (
    <div className="lg:py-2">
      <div className="container px-[18px]">
        {windowWidth >= 1014 && <CompanyBanner company={company} />}
      </div>
    </div>
  );
};

export default VehicleDetailPage;
