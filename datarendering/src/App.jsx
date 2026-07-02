import { useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [userCards, setUserCards] = useState([
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      name: "Nike Air Max",
      dec: "Premium running shoes with lightweight comfort and stylish design.",
      price: 4555,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
      name: "Adidas Ultraboost",
      dec: "Comfortable running shoes with responsive Boost cushioning.",
      price: 5999,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600",
      name: "Puma RS-X",
      dec: "Trendy sneakers designed for everyday comfort and style.",
      price: 4299,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
      name: "Reebok Classic",
      dec: "Classic casual shoes with durable leather finish.",
      price: 3899,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600",
      name: "New Balance 574",
      dec: "Retro-inspired sneakers with premium cushioning.",
      price: 6499,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
      name: "Converse Chuck Taylor",
      dec: "Iconic canvas sneakers perfect for daily wear.",
      price: 3299,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600",
      name: "Vans Old Skool",
      dec: "Skate-inspired shoes with timeless street style.",
      price: 4199,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600",
      name: "Asics Gel-Kayano",
      dec: "High-performance running shoes with excellent support.",
      price: 7499,
    },
  ]);

  const deleteProduct = (id) => {
    const products = userCards.filter((product) => product.id !== id);
    setUserCards(products);
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-10 bg-slate-900 min-h-screen">
      {userCards.map((product) => (
        <Cards
          key={product.id}
          id={product.id}
          img={product.img}
          name={product.name}
          dec={product.dec}
          price={product.price}
          del={deleteProduct}
        />
      ))}
    </div>
  );
};

export default App;
