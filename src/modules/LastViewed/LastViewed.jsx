import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { LastViewedList } from "./ui/LastViewedList/LastViewedList";

export const LastViewed = () => {
  return (
    <div className="container">
      <ContentCard variant="primary">
        <h2 className="font-extrabold leading-8 text-xl mb-4">
          Zuletzt angesehen
        </h2>
        <LastViewedList />
      </ContentCard>
    </div>
  );
};
