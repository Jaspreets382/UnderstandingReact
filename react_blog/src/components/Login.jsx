import React, { useState } from 'react'
import { login as authLogin } from '../store/auth'
import authService from '../appwrite/authService'
import { useForm } from 'react-hook-form'
import { Button, Logo } from "./index"
import { INPUT } from '.'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit } = useForm()
  const login = async (data) => {
    setError('')
    try {
      const session = await authService.login(data)
      if(session){
      const userdata = await authService.getUser()
      console.log("Dispatching login in LOGIN...");
      if (userdata) dispatch(authLogin(userdata));
      console.log("After dispatch:", store.getState().auth);
      navigate('/');
      }

    }
    catch (err) {
      setError(err.message)
    }
  }
  return (


    <div className='flex items-center justify-center w-full'
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className=''>
            <INPUT type='Email' placeholder='Enter your email' {...register('email', {
              required: true,
              validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
            })} ></INPUT>

            <INPUT type='password' placeholder='Enter your password' {...register('password', { required: true })}></INPUT>
            <Button type="submit" classname='w-full'>Sign-In</Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login  