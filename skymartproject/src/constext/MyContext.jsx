import { Children, createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyStoreSkyCartProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
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
  const [carts, setCarts] = useState(() => {
    return JSON.parse(localStorage.getItem("carts")) || [];
  });


  useEffect(()=>{
    localStorage.setItem("carts",JSON.stringify(carts))
  },[carts])



  const increment=(id)=>{
     console.log("Increment id:", id);
  console.log(carts);
  console.log("Before Click:", carts);

      setCarts((prev)=>{
        return prev.map((item)=>{
            return item.id===id?{...item,quantity:item.quantity+1}:item
        })
      })
  }


  const decrement=(id)=>{
    setCarts((prev)=>{
        return  prev.map((item)=>{
            return  item.id===id?{...item,quantity:item.quantity-1}:item
        }).filter((item)=>item.quantity>0)
    })
  }

  const deleteCart=(id)=>{
    setCarts((prev)=>{
        return prev.filter((item)=>item.id!==id)

    })

  }

  return (
    <MyStore.Provider
      value={{
        users,
        setUsers,
        data,
        setData,
        electronicData,
        setElectronicData,
        fashionData,
        setFashionData,
        furnicureData,
        setFurnicureData,
        sportsData,
        setSportsData,
        accessories,
        setAccessories,
        currentUser,
        setCurrentUser,
        currentIndex,
        setCurrentIndex,
        topproducts,
        setTopProducts,
        topRated,
        setTopRated,
        arrivals,
        setArrivals,
        topArrivals,
        settopArrivals,
        setCarts,
        carts,
        increment,
        decrement,
        deleteCart
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
