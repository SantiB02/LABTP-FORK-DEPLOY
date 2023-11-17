import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";

export const CreateProduct = ({
  products,
  handleProducts,
  handleProductList,
}) => {
  const { addProduct } = useProducts();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    variants: { colorId: "", sizeId: "", stock: 20 },
    price: "",
    category: "",
    ImageLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      variants: { ...prevProduct.variants, colorId: color },
    }));
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      variants: { ...prevProduct.variants, sizeId: size },
    }));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      category: category,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    handleProductList([...products, newProduct]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Crear Producto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción del producto"
          value={newProduct.description}
          onChange={handleInputChange}
          className="border p-2"
        />
        <select
          name="color"
          onChange={handleColorChange}
          className="border p-2"
        >
          <option value="1">Rojo</option>
          <option value="2">Azul</option>
          <option value="3">Verde</option>
        </select>
        <select name="size" onChange={handleSizeChange} className="border p-2">
          <option value="1">Talle S</option>
          <option value="2">Talle M</option>
          <option value="3">Talle L</option>
        </select>
        <input
          type="text"
          name="price"
          placeholder="Precio del producto"
          value={newProduct.price}
          onChange={handleInputChange}
          className="border p-2"
        />
        <select
          name="category"
          onChange={handleCategoryChange}
          className="border p-2"
        >
          <option value="Corpiños">Corpiños</option>
          <option value="Mallas">Mallas</option>
          <option value="Camisones">Camisones</option>
        </select>
        <input
          type="text"
          name="ImageLink"
          placeholder="Imagen del producto"
          value={newProduct.ImageLink}
          onChange={handleInputChange}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Crear
        </button>
      </form>
    </div>
  );
};
