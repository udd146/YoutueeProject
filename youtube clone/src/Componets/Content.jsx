import { useEffect, useState } from "react"
import { youtubeAPI } from "../Utilis/contant"
import ContentCard from "./ContentCard"
import { Link } from "react-router-dom"


const Content = ()=>{

const [youtubeData,setYoutubeData]  = useState([])    

useEffect(()=>{
  getYoutubeContent()
},[])

const getYoutubeContent = async ()=>{

    const data = await fetch(youtubeAPI)
    const json = await data.json()
    setYoutubeData(json.items)
    // console.log(json.items, "youtubeData")
}
    

return (
       <div className="content-card">
       {
        youtubeData.map(item=>
          
          <Link to={`/watch?v=${item.id}`}>
            <ContentCard youtubeData = {item} />
          </Link>

        )
       }
       
       </div>
    )

}


export default Content