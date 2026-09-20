import { Route, Routes } from 'react-router'
import './App.css'



//Pages
import MainPage from './Pages/Mainpage'
import HomePage from './Pages/Homepage'
import { myTool } from './Context/DataTransferringtool'
import { useState } from 'react'
import AddTask from './Pages/AddTask'

function App() {

  const[Tasks , setTasks] = useState()

  return(
    <myTool.Provider value={{Tasks , setTasks}}>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/Homepage' element={<HomePage/>}/>
      <Route path='/AddTask' element={<AddTask/>}/>
    </Routes>
    </myTool.Provider>
  )
}

export default App
