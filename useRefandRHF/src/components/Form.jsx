import { useRef, useState } from "react";

const Form = () => {
  const formref = useRef({});
  const [product, setproduct] = useState({});

  const formHandler = (e) => {
    e.preventDefault();

    console.log(formref.current.productName.value);
    console.log(formref.current.price.value);
    console.log(formref.current.cat.value);
    console.log(formref.current.img.value);

    const obj = {
      pName: formref.current.productName.value,
      price: formref.current.price.value,
      cat: formref.current.cat.value,
      img: formref.current.img.value,
    };

    setproduct(obj);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Product
        </h2>

        <form className="space-y-4" onSubmit={formHandler}>
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Product Name
            </label>
            <input
              ref={(e) => (formref.current.productName = e)}
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Price
            </label>
            <input
              ref={(e) => (formref.current.price = e)}
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Category
            </label>

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              ref={(e) => (formref.current.cat = e)}
            >
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Image URL
            </label>
            <input
              ref={(e) => (formref.current.img = e)}
              type="text"
              placeholder="Paste image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>

        <h1 className="text-red-900">{product.pName}</h1>
      </div>
    </div>
  );
};

export default Form;
