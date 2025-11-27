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
import { PricingRadio } from "@/shared/ui/PricingRadio/PricingRadio";

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
  const defaultValues = getDefaultValues();

  const methods = useForm({
    defaultValues,
  });
  const { control, reset, handleSubmit } = methods;

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
        className="grid grid-cols-2 gap-4 w-full items-center bg-background-light-black p-[18px] sm:grid-cols-4 lg:rounded-br-2xl lg:rounded-tr-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {vehiclesFields[openIndex !== 4 ? openIndex : 5].map((item) => (
          <div className={clsx(typeToClass[item?.className])} key={item?.id}>
            {item?.type === "selector" && (
              <Controller
                name={item?.name}
                control={control}
                render={({ field }) => <Selector {...field} item={item} />}
              />
            )}

            {item?.type === "checkbox" && (
              <Controller
                name="isElectro"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    Icon={item?.icon}
                    text={item?.label}
                    variant="primary"
                  />
                )}
              />
            )}

            {item?.type === "pricingRadio" && (
              <Controller
                name="pricing_method"
                control={control}
                render={({ field }) => <PricingRadio {...field} />}
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
              <div className="sm:mb-1">
                <Button
                  variant="primary"
                  text="1.457.429 Angebote"
                  Icon={<IoSearch size={18} />}
                />
              </div>
            )}

            {item?.type === "filterActions" && (
              <FilterActions item={item} reset={reset} />
            )}
          </div>
        ))}
      </form>
    </FormProvider>
  );
};

export default FiltersForm;
