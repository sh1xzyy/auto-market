import { AIHelperIntro } from "@/modules/AIHelperIntro";
import { DealsForYou } from "@/modules/DealsForYou";
import { LastViewed } from "@/modules/LastViewed";
import { MainFilters } from "@/modules/mainFilters";
import { MainImage } from "@/modules/mainImage";
import { ParkedVehicles } from "@/modules/ParkedVehicles";
import { PopularBrands } from "@/modules/PopularBrands";
import { PopularBrandsAndMore } from "@/modules/PopularBrandsAndMore";
import { SelectedCategories } from "@/modules/SelectedCategories";
import React from "react";

const HomePage = () => {
  return (
    <>
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

      <section className="py-[7px]">
        <SelectedCategories />
      </section>

      <section className="py-[7px]">
        <PopularBrands />
      </section>

      <section className="py-[7px]">
        <PopularBrandsAndMore />
      </section>
    </>
  );
};

export default HomePage;
