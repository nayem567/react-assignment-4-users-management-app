import { useState, useEffect } from "react";
import Product from "./Product";
import "./products.module.css";
import Search from "./Search";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const dataArray = Object.values(data);

      setIsLoading(false);
      setProducts(dataArray);

      setFilteredProducts(dataArray);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveProduct = (title) => {
    const filter = filteredProducts.filter(
      (product) => product.title !== title
    );
    setFilteredProducts(filter);
  };

  const handleSearch = (searchValue) =>{
    let value = searchValue.toLowerCase();
    const newProducts = products.filter((product) =>{
      const productTitle = product.title.toLowerCase();
      return productTitle.startsWith(value);
    });
    setFilteredProducts(newProducts);
  }

  return (
    <div>
      <Search onSearch = {handleSearch}/>
      <section>
        {isLoading && <p>Loading....</p>}
        {error && <p>{error.message}</p>}
        {filteredProducts.map((product) => {
          return (
            <Product
              {...product}
              key={product.id}
              onRemoveProduct={handleRemoveProduct}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Products;
