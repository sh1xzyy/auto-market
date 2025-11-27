"use client";

import { useState } from "react";
import { Tabs } from "../ui/Tabs/Tabs";
import OAuthActions from "../ui/OAuthActions/OAuthActions";
import { Divider } from "../ui/Divider/Divider";
import { LoginForm } from "../components/LoginForm/LoginForm";
import Link from "next/link";
import { routes } from "@/shared/constants/routes";
import { Benefits } from "../ui/Benefits/Benefits";

export const AuthLayout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderTitle = () => {
    switch (activeIndex) {
      case 0:
        return "Hallo! Willkommen zurück!";
      case 1:
        return "Erstelle Dein mobile.de Konto!";
      default:
        break;
    }
  };

  const renderForm = () => {
    switch (activeIndex) {
      case 0:
        return <LoginForm />;
    }
  };

  const renderLinkText = () => {
    switch (activeIndex) {
      case 0:
        return "Zum Händler-Login";
      case 1:
        return "Zur Händler-Registrierung";
    }
  };

  return (
    <div className="md:grid md:grid-cols-2 md:gap-[18px]">
      <div>
        <div className="mb-[27px] bg-background-light-black border border-grey md:rounded-lg md:border md:border-grey">
          <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

          <div className="px-[18px] py-[27px] md:p-9">
            <h2 className="mb-[18px] text-xl font-extrabold">
              {renderTitle()}
            </h2>

            <OAuthActions activeIndex={activeIndex} />
            <Divider />

            {renderForm()}
          </div>
        </div>
        <div className="text-md font-bold text-center">
          <span>Sind Sie Händler?&nbsp;</span>
          <Link
            className="text-light-orange underline"
            href={routes.auth.register}
          >
            {renderLinkText()}
          </Link>
        </div>
      </div>

      <Benefits />
    </div>
  );
};
