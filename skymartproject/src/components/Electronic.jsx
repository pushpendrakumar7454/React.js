import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductCart from "./ProductCart";
import { MyStore } from "../constext/MyContext";
import { Search, ChevronDown } from "lucide-react";

const Electronic = () => {
  const { electronicData, setElectronicData } = useContext(MyStore);

  // Search
  const [search, setSearch] = useState("");

  // Category
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  // Sort
  const [sortBy, setSortBy] = useState("Featured");

  // Dropdown
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );

      setElectronicData(res.data);
    } catch (error) {
      console.log("Data not found", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Category List
  const categories = useMemo(() => {
    const list = [
      ...new Set(electronicData.map((item) => item.category)),
    ];
    return ["All Categories", ...list];
  }, [electronicData]);

  // Search + Category Filter
  let filteredProducts = electronicData.filter((product) => {
    const matchSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All Categories"
        ? true
        : product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  // Sorting
  switch (sortBy) {
    case "Price : Low to High":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "Price : High to Low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "Name A-Z":
      filteredProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    case "Name Z-A":
      filteredProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    default:
      break;
  }

  return (<div className="dark:bg-black">
  <div className="mb-10 bg-white dark:bg-black p-6">
    <h1 className="text-3xl font-semibold text-white">
      All Products
    </h1>

    <p className="mt-2 text-zinc-500">
      {filteredProducts.length} products found
    </p>

    <div className="mt-8 rounded-3xl border border-zinc-700 p-4">
      <div className="flex flex-col gap-4 lg:flex-row">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 mt-1 w-full rounded-2xl border border-lime-700 dark:bg-zinc-900 pl-14 pr-4 text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <button
            onClick={() => {
              setCategoryOpen(!categoryOpen);
              setSortOpen(false);
            }}
            className="flex p-3 text-sm mt-1 min-w-[170px] items-center justify-between rounded-2xl border border-zinc-700 dark:bg-zinc-900 px-5 dark:text-white transition hover:border-violet-500"
          >
            <span>{selectedCategory}</span>
            <ChevronDown size={18} />
          </button>

          {categoryOpen && (
            <div className="absolute left-0 top-16 z-50 w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCategoryOpen(false);
                  }}
                  className="block w-full px-5 py-3 text-left text-white hover:bg-zinc-800"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Featured */}
        <div className="relative">
          <button
            onClick={() => {
              setSortOpen(!sortOpen);
              setCategoryOpen(false);
            }}
            className="flex p-3 text-sm mt-1 min-w-[180px] items-center justify-between rounded-2xl border border-zinc-700 dark:bg-zinc-900 px-5 dark:text-white transition hover:border-violet-500"
          >
            <span>{sortBy}</span>
            <ChevronDown size={18} />
          </button>

          {sortOpen && (
            <div className="absolute left-0 top-16 z-50 w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl">
              {[
                "Featured",
                "Price : Low to High",
                "Price : High to Low",
                "Name A-Z",
                "Name Z-A",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSortBy(item);
                    setSortOpen(false);
                  }}
                  className="block w-full px-5 py-3 text-left text-white hover:bg-zinc-800"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 dark:bg-black">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <ProductCart
          key={product.id}
          product={product}
        />
      ))
    ) : (
      <div className="col-span-full flex items-center justify-center py-20">
        <h1 className="text-2xl font-semibold text-white">
          No Products Found
        </h1>
      </div>
    )}
  </div>
</div>
  );
};

export default Electronic;
