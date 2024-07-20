import React from 'react'
import './Form.css'
import { userContext } from '../../App'
import { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import io from 'socket.io-client';

const Form = () => {
  const [message, setMessage] = useState('')
  //const user = useContext(userContext)
  const user = Cookies.get('username')
  const socket = io('https://web-socket-chat-server.onrender.com/')
  
  function submit(){
    socket.on("connection", ()=>{
      console.log('connected')
    })

    socket.emit('msg', {
      'emiter':user,
      'message':message
    })
    setMessage('')
  }



  return (
    <div className='form'>
        <input type="text" placeholder='Hello' onChange={(e)=>setMessage(e.target.value)} value={message}/>
        <button onClick={submit}>send</button>
    </div>
  )
}

export default Form