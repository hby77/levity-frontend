import { signIn, signUp } from "../services/user"
import logo from "../images/SignupLogo.gif"
import image from "../images/Signin.png"
import { useState } from "react"

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn(form)
    localStorage.setItem('token', res.data.access_token)
    localStorage.setItem('id', res.data.user._id.$oid)
  }

  return (
    <>
      <div className="bg-[#e7e9ea] flex min-h-screen">
        <div className="flex flex-1 flex-col px-4 mt-12 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex flex-col text-center">
              <img
                className="h-68 w-auto"
                src={logo}
                alt="Your Company"
              />
              <h2 className="mt-20 text-3xl font-black tracking-tight text-gray-900 sm:text-6xl">Log In</h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@gmail.com"
                        onChange={handleChange}
                        value={form.email}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        onChange={handleChange}
                        value={form.password}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8"> 
                    <button
                      type="submit"
                      className="bg-[#e7e9ea] transform border-2 w-24 h-24 rounded-full duration-500 border-black hover:bg-black hover:text-white text-2xl m-auto inset-0 font-semibold leading-7 text-center text-gray-800"
                    >
                      Sign In
                    </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default SignIn