import React, { useState } from 'react'
import authService from '../appwrite/authService'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { INPUT } from './Input'
import { Button, Logo } from './index'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/auth'

function Signup() {
    const [error, setError] = useState('')
    const {register,handleSubmit} = useForm() 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const create = async (data) => {
        setError('')
        try {
            const created = await authService.createAccount(data)
            if (created) {
                const userData = await authService.getUser()
                console.log("Dispatching login...");
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }

        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <INPUT label="Full Name"
                            type='text'
                            placeholder="Full Name"
                            {...register("name", { required: true })}>

                        </INPUT>
                        <INPUT label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <INPUT
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup