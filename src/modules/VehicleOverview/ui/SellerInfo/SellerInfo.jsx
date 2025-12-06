"use client";

import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { Button } from "@/shared/ui/Button/Button";

export const SellerInfo = ({ sellerInfo }) => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const {
    company: { name },
    phone,
    location: { country, postalCode, city },
  } = sellerInfo;

  return (
    <div className="mb-2">
      <DefaultLink variant="text_normal" href="/" text={name} />

      <div className="text-md">
        <span className="uppercase">{country}-</span>
        <span>{postalCode}</span>
        &nbsp;
        <span>{city}</span>
      </div>

      <h4 className="font-bold flex mt-4">
        <span>
          Tel: {!isPhoneOpen ? phone.slice(0, -4) + ".... ..." : phone}
        </span>
        {!isPhoneOpen && (
          <Button
            variant="text_primary"
            text="Einblenden"
            Icon={<IoEyeSharp size={16} />}
            onClick={() => setIsPhoneOpen(true)}
          />
        )}
      </h4>
    </div>
  );
};
