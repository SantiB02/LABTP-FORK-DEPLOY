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
    <section className="flex align-center justify-start w-[50vw] text-[16px] text-white">
      <div className="mr-10">
        <label className="text-xl font-bold mr-4" htmlFor={minPriceFilterId}>
          Precio a partir de:
        </label>
        <input
          className="text-3xl font-bold mb-4"
          type="range"
          id={minPriceFilterId}
          min="1000"
          max="15000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span className="text-xl ml-2 font-bold mb-4">${filters.minPrice}</span>
      </div>

      <div>
        <label
          className="text-xl mr-4 ml-2 font-bold mb-4"
          htmlFor={categoryFilterId}
        >
          Categoría
        </label>
        <select
          className="text-white text-xl mr-4 ml-2 mb-4 bg-[#150137]"
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
