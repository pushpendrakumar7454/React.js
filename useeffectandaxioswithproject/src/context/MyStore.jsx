import { createContext ,useState} from "react";



export const MyStore=createContext()


export const MyStoreContextProvider=({children})=>{

     const [users, setusers] = useState([]);
     const [toggle, settoggle] = useState(true)
    const [carts, setcarts] = useState([])

    const incrementQuantity=(id)=>{
        setcarts((prev)=>{
            return prev.map((val)=>{
                return val.id===id?{...val,quantity:val.quantity+1}:val
            })

        })
        
    }
    const descreaeQuantity=(id)=>{
        setcarts((prev)=>{
            return prev.map((val)=>{
                return val.id===id?{...val,quantity:val.quantity-1}:val
            }).filter((val)=>val.quantity>0)
        })
    }

    return <MyStore.Provider value={{users,setusers,toggle,settoggle,carts,setcarts,incrementQuantity,descreaeQuantity}}>{children}</MyStore.Provider>
}