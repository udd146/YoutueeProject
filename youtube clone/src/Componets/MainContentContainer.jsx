    import { Outlet } from "react-router"
    import Content from "./Content"
    import ContentButton from "./ContentButton"
    import SideBar from "./Sidebar"
    
    import './youtubeBody.css'
import Header from "./Header"

    const MainContentContainer = ()=>{

    return(
   <>
    <Header/>
    <div className="body-content">
    <SideBar/>
     <Outlet/>
    </div>
   </>

)

    }




    export default MainContentContainer