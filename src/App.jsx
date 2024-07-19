import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './components/login/Login'
import React, { useState , createContext, useEffect} from 'react'
import Cookies from 'js-cookie'
import io from 'socket.io-client';
export const userContext = createContext()


function App() {

  const socketRef = React.useRef(null);
  const [username, setUsername] = useState('')
  const socket = io('localhost:3001')

  const setUname= (data)=>{
    Cookies.set('username', data)
    setUsername(data)
    
  }

  useEffect(() => {
    socket.on("connection", ()=>{
      console.log('connected')
    })

    
  }, []);

  return (

    <userContext.Provider value={username}>
      <Router>
        <Routes>
        <Route path='/' element={<Login uname={setUname}/>}></Route>
        
        <Route path='/home' element={<Home/>}></Route>

        </Routes>
      </Router>
    </userContext.Provider>

    
    
  )
}

export default App
