"use client";

import clsx from "clsx";
import { Button } from "@/shared/ui/Button/Button";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { PaymentMethodRadio } from "@/shared/ui/PaymentMethodRadio/PaymentMethodRadio";
import { typeToClass } from "../../data/typeToClass";
import { IoSearch } from "react-icons/io5";
import { FilterActions } from "../FilterActions/FilterActions";
import { Selector } from "@/shared/ui/Selector/Selector";
import {
  CAR_FORM_VALUES,
  E_BIKE_FORM_VALUES,
  MOTORCYCLE_FORM_VALUES,
  VAN_FORM_VALUES,
} from "../../constants/formValues";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";

const FiltersForm = ({ openIndex, vehiclesFields }) => {
  const getDefaultValues = () => {
    switch (openIndex) {
      case 0:
        return CAR_FORM_VALUES;
      case 1:
        return MOTORCYCLE_FORM_VALUES;
      case 2:
        return E_BIKE_FORM_VALUES;
      case 3:
        return VAN_FORM_VALUES;
      default:
        return {};
    }
  };

  const methods = useForm({
    defaultValues: getDefaultValues(),
  });

  const { control, handleSubmit } = methods;

  const onSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-2 gap-[18px] w-full items-center bg-background-light-black p-[18px] sm:grid-cols-[156px_1fr_1fr_1fr] md:grid-cols-4 lg:rounded-br-2xl lg:rounded-tr-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {vehiclesFields[openIndex !== 4 ? openIndex : 5].map((item) => (
          <div
            className={clsx(typeToClass[item?.type] || typeToClass[item?.id])}
            key={item?.id}
          >
            {item?.type === "selector" && <Selector item={item} />}

            {item?.type === "checkbox" && (
              <Controller
                name="isElectro"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} Icon={item?.icon} text={item?.label} />
                )}
              />
            )}

            {item?.type === "radio" && (
              <Controller
                name="payment_method"
                control={control}
                render={({ field }) => <PaymentMethodRadio {...field} />}
              />
            )}

            {item?.type === "submit" && (
              <div className="lg:mb-1">
                <Button
                  variant="primary"
                  text="1.457.429 Angebote"
                  Icon={<IoSearch size={18} />}
                />
              </div>
            )}

            {item?.type === "filterButton" && <FilterActions item={item} />}
          </div>
        ))}
      </form>
    </FormProvider>
  );
};

export default FiltersForm;
