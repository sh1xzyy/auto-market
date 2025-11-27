"use client";

import { Button } from "@/shared/ui/Button/Button";
import { BaseInput } from "@/shared/ui/inputs/BaseInput/BaseInput";
import { PasswordInput } from "@/shared/ui/inputs/PasswordInput/PasswordInput";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { PasswordRequirements } from "../../ui/PasswordRequirements/PasswordRequirements";

export const RegisterForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
      isAccept: false,
    },
  });
  const { handleSubmit, control } = methods;

  const onSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[18px] mb-[9px]">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <BaseInput {...field} type="email" labelText="E-Mail-Adresse" />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput {...field} labelText="Passwort" />
            )}
          />
        </div>

        <PasswordRequirements />

        <Button variant="primary_big" text="Registrieren" type="Submit" />
      </form>
    </FormProvider>
  );
};
