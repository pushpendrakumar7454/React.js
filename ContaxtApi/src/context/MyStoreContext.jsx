import { createContext,useState } from "react";

export const MyStore=createContext()

export const MyStoreContextProvider=({children})=>{

  const [toggle, settoggle] = useState(false)
  const [carts, SetCarts] = useState([])

    return <MyStore.Provider value={{toggle,settoggle,carts,SetCarts}}>{children}</MyStore.Provider>
}