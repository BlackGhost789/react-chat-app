import React, { useEffect , useState} from 'react'
import './List.css'
import io from 'socket.io-client';
const socket = io('https://web-socket-chat-server.onrender.com/')
const List = () => {
    const [data, setData] = useState([])

    


    useEffect(() => {
        socket.on('msg', (msg) => {
          setData((prevMessages) => [...prevMessages, msg]);
        });
    
        return () => {
          socket.off('msg');
        };
      }, []);




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