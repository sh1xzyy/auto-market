import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { PopularBrandsAndMoreList } from "./ui/PopularBrandsAndMoreList/PopularBrandsAndMoreList";

export const PopularBrandsAndMore = () => {
  return (
    <div className="container">
      <ContentCard variant="primary">
        <h2 className="font-extrabold leading-8 text-xl mb-4">
          Beliebte Automarken und mehr auf unserem Fahrzeugmarkt
        </h2>

        <PopularBrandsAndMoreList />
      </ContentCard>
    </div>
  );
};
