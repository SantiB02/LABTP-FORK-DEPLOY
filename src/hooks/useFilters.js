import { useContext } from "react";
import { FiltersContext } from "../contexts/FiltersContext";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    console.log(filters, filters);
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" ||
          product.category === filters.category.toString())
      );
    });
  };

  return { filterProducts, setFilters, filters };
}
