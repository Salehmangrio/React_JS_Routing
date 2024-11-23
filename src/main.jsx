import './index.css'
import { StrictMode } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LangFullDeatail from './pages/LangFullDeatail.jsx'
import Languages from './pages/languages.jsx'

let root=createRoot(document.getElementById('root'))
let allRoutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'services',
      element:<Services/>
    },
    //Dynamic Routing 
    {
      path:'languages',
      element:<Languages/>
    },
    {
      path:'languages/:id',
      element: <LangFullDeatail/>
    }
  ]
)
root.render(
  <StrictMode>
    <RouterProvider router={allRoutes}/>
       
  </StrictMode>,
)
