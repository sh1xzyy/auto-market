import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { DetailsHeader } from "./ui/Header/Header";
import { PriceInfo } from "./ui/PriceInfo/PriceInfo";
import { Financing } from "./ui/Financing/Financing";
import { SellerInfo } from "./ui/SellerInfo/SellerInfo";
import { ContactActions } from "./ui/ContactActions/ContactActions";

export const VehicleOverview = ({ vehicleData }) => {
  const { windowWidth } = useWindowWidth();

  const {
    name,
    email,
    description,
    grossPrice,
    fairPrice,
    netPrice,
    monthlyRate,
    company,
    phone,
    location,
  } = vehicleData;

  return (
    <ContentCard>
      <DetailsHeader
        details={{ name, description }}
        isDesktop={windowWidth >= 1014}
      />
      <PriceInfo priceData={{ grossPrice, fairPrice, netPrice }} />
      <Financing monthlyRate={monthlyRate} />

      {windowWidth >= 1014 && <hr className="my-4 text-grey" />}
      {windowWidth >= 1014 && (
        <SellerInfo sellerInfo={{ company, phone, location }} />
      )}

      <ContactActions
        contacts={{ phone, email }}
        isDesktop={windowWidth >= 1014}
      />
    </ContentCard>
  );
};
