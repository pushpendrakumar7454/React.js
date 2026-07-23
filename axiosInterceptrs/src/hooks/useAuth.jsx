
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { MyContext } from "../components/context/MyContext"
import { useContext } from "react"
import { toast } from "react-toastify";


export const useAuth=()=>{
    const{handleSubmit,reset,register,formState:{errors},watch}=useForm()
    const navigate=useNavigate()
    const {users, setCurrentUser,setUsers}=useContext(MyContext)
    

        //login Page
       const submitLogin=(data)=>{
        let users=JSON.parse(localStorage.getItem('users'))||[]
    
        const activeUser=users.find((user)=>user.email===data.email && user.password==data.password)
    
        localStorage.setItem("currentUser",JSON.stringify(activeUser))
        setCurrentUser(activeUser)
        if(activeUser){
            toast.success("Login Success");
            navigate('/')
        }else{
            alert("Email and password wrong")
        }
    
       }

       //register
    const subitRegisterForm=(data)=>{
   const oldUsers= JSON.parse(localStorage.getItem("users"))|| []
   const ExistUser=oldUsers.find((user)=>user.email===data.email)
   if(ExistUser){
    toast.error("Email allready exit Success");
    return
   }
   const updateUser=[...oldUsers,data]
   localStorage.setItem("users",JSON.stringify(updateUser))
   setUsers(updateUser) 
   toast.success("Login Success");
   navigate('/login')
}




       return{
        handleSubmit,
        reset,
        errors,
        register,
        navigate,
        watch,
        submitLogin,
        subitRegisterForm,
        setCurrentUser

       }

}