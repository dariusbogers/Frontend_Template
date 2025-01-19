import React, { useEffect, useContext, useState } from 'react'

const RegisterForm = () => {

    const [registerData, setRegisterData] = useState({ email: "", password: "", cpassword: "" })
    const [registerResponse, setRegisterResponse] = useState("default")
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    
    const [succesMessage, setSuccesMessage] = useState(null)

    return (
        <section className="h-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-blue-100 dark:bg-blue-900">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className=" bg-green-400">{succesMessage}</h1>
                        <h1 className=" bg-red-600">{error}</h1>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register your new account!
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" value={registerData.email} onChange={() => {}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="Email" required={true} />
                            </div>


                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" value={registerData.password} onChange={() => {}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required={true} />
                            </div>

                            <div>
                                <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm your password</label>
                                <input type="password" name="cpassword" id="cpassword" value={registerData.cpassword} onChange={() => {}} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required={true} />
                            </div>

                            <div className="flex items-center justify-between">
                            </div>
                            <button type="submit" onClick={() => {}} className="w-full font-medium rounded-lg px-5 py-2.5 text-center ">Register</button>

                            <p className="text-sm font-light">
                                Already have an account? <a href="LoginPage" className="font-medium hover:underline">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm