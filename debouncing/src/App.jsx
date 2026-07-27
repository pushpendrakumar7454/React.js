import React, { act, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [searchData, setSearchData] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setAllProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = () => {
    console.log("filter running");
    let result = allProduct.filter((product) => {
      return product.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProducts(result);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      filterData();
    }, 700);

    return () => clearTimeout(timeout);
  }, [searchData, allProduct]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-7">
      <div className="mb-5">
        <input
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          type="text"
          placeholder="Search here..."
          className="border-2 border-blue-600 p-2"
        />
      </div>
      {products.map((data) => {
        return <h2 key={data.id}>{data.title}</h2>;
      })}
    </div>
  );
};

export default App;
