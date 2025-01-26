import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Signup from './components/Signup';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { createContext, useState } from 'react'; 
import ReqAuth from './components/ReqAuth';
import Budget from './components/Budget';
import PhoneFilter from './components/PhoneFilter';
import Expert from './components/Expert';
import BudgetDetails from './components/BudgetDetails';
import HeroSection from './components/HeroSection'
import Categories from './components/Categories';

export const AuthContext = createContext()


function App() {
  const [user,setUser]=useState(null)
  const login=(user)=>{
    setUser(user)
  }
  const logout=()=>{
    setUser(null)
  }




  return (
    <div>
     

      <AuthContext.Provider value={{user,login,logout}}>
      < Navbar/>
      <Routes>

        <Route path='/categories' element={<ReqAuth><Categories/></ReqAuth>}></Route>
        <Route path='/' element={<ReqAuth><Home/></ReqAuth>}></Route>
        <Route path='/services' element={<ReqAuth><Services/></ReqAuth>}></Route>
        <Route path='/about' element={<ReqAuth><About/></ReqAuth>}></Route>
        <Route path='/filter' element={<ReqAuth><PhoneFilter/></ReqAuth>}></Route>
        <Route path='/expert' element={<ReqAuth><Expert/></ReqAuth>}></Route>
        <Route path="/budget/:price" element={<ReqAuth><BudgetDetails /></ReqAuth>} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/budget' element={<Budget/>}></Route>
        
      </Routes>
    </AuthContext.Provider>
    <footer className="footer">
  <p>
    © {new Date().getFullYear()} Mobile Recommendation System - by Vishal Saran.
  </p>
  <p>
    <a href="https://github.com/realnvs" target="_blank" rel="noopener noreferrer">GitHub</a> | 
    <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer"> Portfolio</a>
  </p>
</footer>
    </div>
  )
}

export default App;