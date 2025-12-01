import { POPULAR_BRANDS } from "../../temporary/popularBrands";
import { PopularBrand } from "../PopularBrand/PopularBrand";

export const PopularBrandsList = () => {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-6">
      {POPULAR_BRANDS?.map((brand, i, arr) => (
        <PopularBrand key={i} index={i} brand={brand} arr={arr} />
      ))}
    </ul>
  );
};
