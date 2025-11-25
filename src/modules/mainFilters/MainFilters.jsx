"use client";

import { useState } from "react";
import VehiclesList from "./ui/VehiclesList/VehiclesList";
import {
  eBikes,
  miniTrucks,
  motorBikes,
  other,
  otherVehicles,
  passengerCar,
} from "./data/formFields";
import FiltersForm from "./ui/FiltersForm/FiltersForm";

export const MainFilters = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isOtherFiltersOpen, setIsOtherFiltersOpen] = useState(false);

  const vehiclesFields = [
    passengerCar,
    motorBikes,
    eBikes,
    miniTrucks,
    other,
    otherVehicles,
  ];

  return (
    <div className="container">
      <div className="md:flex w-full border border-grey lg:rounded-2xl">
        <VehiclesList
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          setIsOtherFiltersOpen={setIsOtherFiltersOpen}
        />

        {(isOtherFiltersOpen || openIndex !== vehiclesFields.length - 2) && (
          <FiltersForm vehiclesFields={vehiclesFields} openIndex={openIndex} />
        )}
      </div>
    </div>
  );
};
