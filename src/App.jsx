import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import DataTable from './components/Datatable'
import DataCard from './components/DataCard'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Task from './components/Task'
import Counter from './components/Counter'
import Input from './components/Input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DataCard/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/r" element={<Reg/>}/>
        <Route path="/t" element={<DataTable/>}/>
        <Route path="/c" element={<DataCard/>}/>
        <Route path="/s" element={<StateBasic/>}/>
        <Route path="/ts" element={<Task/>}/>
        <Route path="/co" element={<Counter/>}/>
        <Route path="/i" element={<Input/>}/>
      </Routes>
    </>
  )
}

export default App