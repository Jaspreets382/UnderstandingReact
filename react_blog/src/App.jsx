import { useEffect, useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/auth';
import authService from './appwrite/authService';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getUser()
    .then((userData)=>{
      if(userData)
        dispatch(login({userData}))
      else
        dispatch(logout())
    })
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))

  },[])

  return <div className='bg-amber-500'>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>

  </div>
}

export default App
