import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";

export const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="flex align-center flex-start text-[16px] text-white">
      <div className="flex gap-1">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="1000"
          max="15000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className="flex gap-1">
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          className="text-white bg-[#121212]"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>

          <option value="Corpiños">Corpiños</option>
          <option value="Mallas">Mallas</option>
          <option value="Camisones">Camisones</option>
        </select>
      </div>
    </section>
  );
};
