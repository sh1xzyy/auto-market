import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { PopularBrandsList } from "./ui/PopularBrandsList/PopularBrandsList";

export const PopularBrands = () => {
  return (
    <div className="container">
      <ContentCard variant="primary">
        <h2 className="font-extrabold leading-8 text-xl mb-4">
          Beliebte Automarken
        </h2>

        <PopularBrandsList />
      </ContentCard>
    </div>
  );
};
