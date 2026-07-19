import { Children, createContext, useState } from "react";


export const MyStore=createContext()

export const MyStoreSkyCartProvider=({children})=>{
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(()=>{
        return JSON.parse(localStorage.getItem("currentUser"))||null
    })
    const [data, setData] = useState([]);
    const [electronicData, setElectronicData] = useState([])
    const [fashionData, setFashionData] = useState([])
    const [furnicureData, setFurnicureData] = useState([])
    const [sportsData, setSportsData] = useState([])
    const [accessories, setAccessories] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [topproducts, setTopProducts] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [arrivals, setArrivals] = useState([])
    const [topArrivals, settopArrivals] = useState([])




    return <MyStore.Provider value={{users,setUsers,data,setData,electronicData,setElectronicData,fashionData,setFashionData,furnicureData,setFurnicureData,sportsData,setSportsData,accessories,setAccessories,currentUser,setCurrentUser,currentIndex,setCurrentIndex,topproducts,setTopProducts,topRated,setTopRated,arrivals,setArrivals,topArrivals,settopArrivals}}>{children}</MyStore.Provider>
}