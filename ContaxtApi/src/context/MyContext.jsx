import { createContext,useState } from "react";

export const MyStore=createContext()

export const MyStoreContextProvider=({children})=>{
   

    return <MyStore.Provider value={{toggle,settoggle,carts,SetCarts}}>{children}</MyStore.Provider>
}