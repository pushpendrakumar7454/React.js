import { createContext,useState } from "react";


export const MyContext=createContext()



export const MyContextProvider=({children})=>{

 const [users, setUsers] = useState([])
 const [currentUser, setCurrentUser] = useState(()=>{
    return JSON.parse(localStorage.getItem('currentUser'))|| null
 })
 const [usersData, setUsersData] = useState([])
 const [isLoading, setisLoading] = useState(true)
 const [productData, setproductData] = useState([])


    return <MyContext.Provider value={{users,setUsers,currentUser,setCurrentUser,usersData, setUsersData,isLoading, setisLoading,productData, setproductData}}>{children}</MyContext.Provider>
}



