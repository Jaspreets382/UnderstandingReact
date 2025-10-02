import { useEffect, useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/auth';
import authService from './appwrite/authService';

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getUser()
    .then((userData)=>{
      if(userData)
        dispatch(login(userData))
      else
        dispatch(logout())
    })
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))

  },[])

  return loading?<div className='bg-amber-500'>
    <Header></Header>
    <div>hello</div>
    <Footer></Footer>

  </div>:null
}

export default App
