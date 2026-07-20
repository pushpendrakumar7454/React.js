import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import {MyStoreSkyCartProvider} from './constext/MyContext.jsx'


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <MyStoreSkyCartProvider>
        <App/>
    </MyStoreSkyCartProvider>
    </BrowserRouter>
  
)
