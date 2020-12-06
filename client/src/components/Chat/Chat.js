import React, {useState,useEffect} from 'react'; 
import queryString from 'query-string'; 
import io from 'socket.io-client'; 
let socket;
const Chat = ({location})=>{
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const ENDPOINT = 'localhost:5050';

      useEffect(()=>{
        const {name, room} = queryString.parse(location.search) // location.search will give parameters of given url
        socket = io(ENDPOINT) // connecting to backend
        setName(name);
        setRoom(room);
        console.log(socket)
        
      })
    
    
      return(
        <h1>Chat</h1>
    )

}
export default Chat