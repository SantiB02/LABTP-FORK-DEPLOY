import {
  getProducts,
  postProduct,
  deleteProduct,
  updateProductAdmin,
} from "../api/product.api";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateProductList, setUpdateProductList] = useState(false);

  const handleProductState = (state) => {
    setProducts(state);
  };

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

  const handleUpdateProductList = () => {
    setUpdateProductList(!updateProductList);
  };

  useEffect(() => {
    fetchProducts();
  }, [updateProductList]);

  const addProduct = async (product) => {
    setIsLoading(true);
    try {
      await postProduct(product);
      setProducts([...products, product]);
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
      Swal.fire({
        icon: "success",
        title: "Producto eliminado",
        showConfirmButton: false,
        timer: 1500,
      });
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

  return {
    products,
    handleProductState,
    isLoading,
    addProduct,
    removeProduct,
    updateProduct,
    fetchProducts,
    handleUpdateProductList,
  };
};
