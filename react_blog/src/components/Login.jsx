import React, { useState } from 'react'
import { login as authLogin } from '../store/auth'
import authService from '../appwrite/authService'
import { useForm } from 'react-hook-form'
import {Button,Input,Logo} from "./index"   
import { useDispatch } from 'react-redux'

function Login() {
    cosnt [error,setError]=useState('')
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const login=async (data)=>{
        setError('')
        try {
            
        } 
        catch (error) {
            setError(error)
        }
    }
  return (
<></>
  )
}

export default Login