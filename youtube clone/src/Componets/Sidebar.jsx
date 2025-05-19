import { useSelector } from 'react-redux'
import './youtubeBody.css'

const SideBar = ()=>{

    const sideBartoggle = useSelector((store)=> store.sideBarToggle.value)
    
    if(!sideBartoggle)
          return
    
    return (
 
        
   <div className='sideBarContainer'>
       
       <div className="SideBarPanel">
        <ul>
            <li className='SideBarContent' id='sideBarHome'>Home</li>
            <li className='SideBarContent'>Short</li>
            <li className='SideBarContent'>Subscription</li>
            
        </ul>
    </div> 
   
    <div className='SideBarPanel'>
        <h2>You</h2>
        <ul>
            <li className='SideBarContent'>History</li>
            <li className='SideBarContent'>Playlist</li>
            <li className='SideBarContent'>Your Videos</li>
            <li className='SideBarContent'>Your Courses</li>
            <li className='SideBarContent'> Watch Later</li>
            <li className='SideBarContent'>Liked Videos</li>
        </ul>
    </div>

    <div className='SideBarPanel'>
        <h2>Explore</h2>
        <ul>
            <li className='SideBarContent'>Trending</li>
            <li className='SideBarContent'>Shopping</li>
            <li className='SideBarContent'>Playlist</li>
            <li className='SideBarContent'>Music</li>
            <li className='SideBarContent'>Films</li>
            <li className='SideBarContent'>Courses</li>
        </ul>
    </div>
    
    </div>
 
      
    )

}


export default SideBar