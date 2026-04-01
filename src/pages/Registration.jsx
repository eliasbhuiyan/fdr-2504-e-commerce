import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Link } from 'react-router'

const Registration = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Registraton</h2>
                    <form className="flex flex-col gap-2">
                        <Input label="Full Name" placeholder='Enter your Full Name' />
                        <Input type='email' label="Email" placeholder='Enter your email' />
                        <Input type='password' label="Password" placeholder='Enter your Password' />

                        <div className="flex items-center justify-between flex-wrap">
                            <p className="text-gray-900 mt-4"> Already have an account? <Link to="/login" className="text-sm text-blue-500 -200 hover:underline mt-4">Login</Link></p>
                        </div>
                        <Button>Create Account</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
