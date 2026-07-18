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


    return <MyStore.Provider value={{users,setUsers,data,setData,electronicData,setElectronicData,fashionData,setFashionData,currentUser,setCurrentUser}}>{children}</MyStore.Provider>
}