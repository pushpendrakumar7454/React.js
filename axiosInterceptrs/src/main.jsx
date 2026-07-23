import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './router/AppRoutes.jsx'
import { MyContextProvider } from './components/context/MyContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
<MyContextProvider><AppRoutes/>  <ToastContainer /></MyContextProvider>
)
