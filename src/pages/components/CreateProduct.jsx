import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";

export const CreateProduct = () => {
  const { addProduct } = useProducts();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    variants: { colorId: "", sizeId: "", stock: 1 },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct);
  };

  return (
    <>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion del producto"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        {/* <input
          type="text"
          name="stock"
          placeholder="Stock del producto"
          value={newProduct.stock}
          onChange={handleInputChange}
        /> */}
        <select name="color" onChange={handleColorChange}>
          <option value="1">Rojo</option>
          <option value="2">Azul</option>
          <option value="3">Verde</option>
        </select>
        <select name="size" onChange={handleSizeChange}>
          <option value="1">S</option>
          <option value="2">M</option>
          <option value="3">L</option>
        </select>
        <input
          type="text"
          name="price"
          placeholder="Precio del producto"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria del producto"
          value={newProduct.category}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ImageLink"
          placeholder="Imagen del producto"
          value={newProduct.ImageLink}
          onChange={handleInputChange}
        />
        <button type="submit">Crear</button>
      </form>
    </>
  );
};
