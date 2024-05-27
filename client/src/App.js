import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/user/Login'
import Notification from './components/Notification'
import BottomNav from './components/BottomNav'
import Room from './components/rooms/Room'
import ViewPage from './viewPage/ViewPage'


const App = () => {

  return(
    <>
    {/* <ViewPage /> */}
    <Notification />
    <Login />
    <Navbar />
    <BottomNav/>
    <Room />
    </>
  )
    
}

export default App
