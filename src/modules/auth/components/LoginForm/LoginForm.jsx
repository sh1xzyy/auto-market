import { routes } from "@/shared/constants/routes";
import { Button } from "@/shared/ui/Button/Button";
import { BaseInput } from "@/shared/ui/inputs/BaseInput/BaseInput";
import { PasswordInput } from "@/shared/ui/inputs/PasswordInput/PasswordInput";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

export const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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

      <Link
        className="block text-md font-bold underline mb-[18px]"
        href={routes.auth.password_recovery}
      >
        Passwort vergessen?
      </Link>

      <Button variant="primary_big" text="Anmelden" type="Submit" />
    </form>
  );
};
