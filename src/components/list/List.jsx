import React, { useEffect , useState} from 'react'
import './List.css'
import io from 'socket.io-client';

const List = () => {
    const [data, setData] = useState([])

    const socket = io('https://web-socket-chat-server.onrender.com/')


        socket.on('msg', (msg)=>{
            setData([...data , msg])
        })




    return (
        <div className='listt'>
            {
                data.map((value, index)=>{
                    return(
                        <div className='list-item' key={index}>
                            <p className='emiter'>{value.emiter}: </p>
                            <p className='message'>{value.message}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List