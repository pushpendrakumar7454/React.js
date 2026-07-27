import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouts from './router/AppRouts.jsx'

createRoot(document.getElementById('root')).render(
 
  <AppRouts/>
 
)
