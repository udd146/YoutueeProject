import { Link } from 'react-router-dom'
import './youtubeHeader.css'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../Store/toggleSideBarSlice'
import { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../Utilis/contant'
import { updateSearchCache } from '../Store/searchCacheSlice'

const Header = ()=>{
   
  const dispatch = useDispatch()
  const [searchQuery,setSearchQuery] = useState('')
  const [searchData,setSearchData] = useState([])

  useEffect(()=>{
    
  const time= setTimeout(()=>{
      getSearchData()
   },200)

   return(()=>{
 
      clearTimeout(time)
   }
)
  },[searchQuery])

  const getSearchData = async ()=>{

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)  
    const json = await data.json()

    setSearchData(json[1])
    dispatch(updateSearchCache({
      searchQuery:json[1]
    }))
 
}
  
   return(
    <div className="header">
    <img className="headerImg" onClick={()=>dispatch(toggleSidebar())}  id="hImg1" src="https://cdn-icons-png.flaticon.com/512/61/61140.png" alt="ToggleSidenarButton" />
    
    <Link to={"/"} >
    <img className="headerImg" id="hImg2" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="YoutubeIndiaLogo" />
    </Link>
    
   
    <div>
    <div>
        <input placeholder="Search" className="Searchbar" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} >
        </input>
         <button className="SearchButton">🔍</button>
    </div>

    <div className='searchData'>
      {
         searchData.map(data =>(
            <h3 className='individualSearch'>{data}</h3>
         ))
      }
    </div>
    </div>
   
    <img className="headerImg" id="hImg3"  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="UserProfile" />
   </div>
   )

}


export default Header