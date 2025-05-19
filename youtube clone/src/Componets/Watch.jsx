import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router"
import { closeSideBar } from "../Store/toggleSideBarSlice"

const Watch  = ()=>{
 
    const [searchParam] = useSearchParams()
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(closeSideBar())
    },[])
    
    // console.log(searchParam.get('v'))
    return(
        <>
        {/* <h1>Watch Page</h1> */}
        <iframe className="youtubeclip" 
        src={"https://www.youtube.com/embed/" + searchParam.get('v')}  
        title="YouTube video player"   
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
       </iframe>
        </>
    ) 

}

 
export default Watch