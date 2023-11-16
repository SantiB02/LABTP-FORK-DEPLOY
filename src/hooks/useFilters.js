import { useContext } from "react";
import { FiltersContext } from "../contexts/FiltersContext";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.discount === filters.category)
      );
    });
  };

  return { filterProducts, setFilters, filters };
}
