
const ChatContainer = ({data})=>{


    const {name,text} =data
    console.log(name,"name")
    console.log(text,"text")
return <>

<div className="ChatUser">
    <img className="chatUserImg" src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000" alt="UserImage"></img>
    <span className="chatUserName">{name}</span>
    <span className="chatUserDetail">{text}</span>
</div>
</>

}

export default ChatContainer