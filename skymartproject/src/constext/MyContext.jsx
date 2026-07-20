import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyStoreSkyCartProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null;
    } catch {
      return null;
    }
  });

  const [data, setData] = useState([]);
  const [electronicData, setElectronicData] = useState([]);
  const [fashionData, setFashionData] = useState([]);
  const [furnicureData, setFurnicureData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [topproducts, setTopProducts] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [topArrivals, settopArrivals] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const savedCart =
        JSON.parse(localStorage.getItem(`carts_${currentUser.email}`)) || [];

      setCarts(savedCart);
    } else {
      setCarts([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`carts_${currentUser.email}`, JSON.stringify(carts));
    }
  }, [carts, currentUser]);

  const increment = (id) => {
    setCarts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: (item.quantity || 1) + 1,
          };
        }

        return item;
      });
    });
  };

  const decrement = (id) => {
    setCarts((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: (item.quantity || 1) - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const deleteCart = (id) => {
    setCarts((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <MyStore.Provider
      value={{users,setUsers,data,setData,electronicData,setElectronicData,fashionData,setFashionData,furnicureData, setFurnicureData, sportsData, setSportsData, accessories, setAccessories, currentUser,setCurrentUser,currentIndex,setCurrentIndex,topproducts,setTopProducts,topRated,setTopRated,arrivals,setArrivals,topArrivals,settopArrivals,carts,setCarts,increment,decrement,deleteCart,menuOpen,setMenuOpen,}}
    >
      {children}
    </MyStore.Provider>
  );
};
