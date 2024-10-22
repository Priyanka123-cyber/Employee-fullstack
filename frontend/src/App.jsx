import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import {Route, Routes, useLocation} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoutes from './components/PrivateRoutes'
function App() {
  
  const location = useLocation();
  return (
    <>
      
     
   
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      </Route>
    </Routes>
    
    
   
    </>
  )
}

export default App
