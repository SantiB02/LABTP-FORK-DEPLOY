import {
  getProducts,
  postProduct,
  deleteProduct,
  updateProductAdmin,
} from "../api/product.api";
import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    setIsLoading(true);
    try {
      const newProduct = await postProduct(product);
      setProducts([...products, newProduct]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const removeProduct = async (id) => {
    setIsLoading(true);
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (updatedProduct) => {
    setIsLoading(true);
    try {
      await updateProductAdmin(updatedProduct);
      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { products, isLoading, addProduct, removeProduct, updateProduct };
};
