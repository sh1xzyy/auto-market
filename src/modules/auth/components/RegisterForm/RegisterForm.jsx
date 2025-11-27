"use client";

import { Button } from "@/shared/ui/Button/Button";
import { BaseInput } from "@/shared/ui/inputs/BaseInput/BaseInput";
import { PasswordInput } from "@/shared/ui/inputs/PasswordInput/PasswordInput";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { PasswordRequirements } from "../../ui/PasswordRequirements/PasswordRequirements";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { routes } from "@/shared/constants/routes";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";

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

        <div className="mb-[18px]">
          <Controller
            name="isAccept"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} variant="secondary">
                Ich stimme der Nutzung meiner Daten zum Erhalt personalisierter
                E-Mail-Werbung von mobile.de (einschließlich E-Mail-Analyse) zu,
                wie in der{" "}
                <DefaultLink
                  variant="text"
                  text="Einwilligungserklärungnäher"
                  href={routes.home}
                />
                &nbsp;beschrieben. Ich kann diese Einwilligung jederzeit
                widerrufen.
              </Checkbox>
            )}
          />
        </div>
        <div className="mb-[18px]">
          <p className="text-md font-bold leading-5">
            Es gelten die mobile.de&nbsp;
            <DefaultLink variant="text" text="AGB" href={routes.home} />
            &nbsp;. Informationen zur Verarbeitung aller Daten werden in der
            mobile.de&nbsp;
            <DefaultLink
              variant="text"
              text="Datenschutzerklärung"
              href={routes.home}
            />
            &nbsp;beschrieben.
          </p>
        </div>

        <Button variant="primary_big" text="Registrieren" type="Submit" />
      </form>
    </FormProvider>
  );
};
