import { AIHelperIntro } from "@/modules/AIHelperIntro";
import { DealsForYou } from "@/modules/DealsForYou";
import { LastViewed } from "@/modules/LastViewed/LastViewed";
import { MainFilters } from "@/modules/mainFilters";
import { MainImage } from "@/modules/mainImage";
import { ParkedVehicles } from "@/modules/ParkedVehicles";

export default function Home() {
  return (
    <div>
      <MainImage />

      <section className="py-[7px] mt-[405px]">
        <MainFilters />
      </section>

      <section className="py-[7px]">
        <AIHelperIntro />
      </section>

      <section className="py-[7px]">
        <DealsForYou />
      </section>

      <section className="py-[7px]">
        <ParkedVehicles />
      </section>

      <section className="py-[7px]">
        <LastViewed />
      </section>
    </div>
  );
}
