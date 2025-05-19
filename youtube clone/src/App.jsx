import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import MainContentContainer from './Componets/MainContentContainer'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Body from './Componets/body'
import Watch from './Componets/watch'
import {Provider} from "react-redux"
 
import SideBar from './Componets/Sidebar'

function App() {
   
const appRouter = createBrowserRouter([{
 path:"/",
 element :<MainContentContainer/>,
 children:[{
  path:"/",
  element:<Body/>
 },
{
  path:"/watch",
  element:<Watch/>
}]

}])
  
 


return (
    <>
   
   
    <RouterProvider router={appRouter}>

    <Header/>
    </RouterProvider>
    
    
     </>
  )
}

export default App
