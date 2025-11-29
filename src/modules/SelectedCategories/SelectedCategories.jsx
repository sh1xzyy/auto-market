import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { SelectedCategoriesList } from "./ui/SelectedCategoriesList";

export const SelectedCategories = () => {
  return (
    <div className="container">
      <ContentCard variant="primary">
        <h2 className="font-extrabold leading-8 text-xl mb-4">
          Ausgewählte Kategorien
        </h2>
        <SelectedCategoriesList />
      </ContentCard>
    </div>
  );
};
