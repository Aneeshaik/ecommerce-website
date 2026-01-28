import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmitForm = async e => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('token', data.token)
      navigate('/')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmitForm}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Sign In
        </h1>

        {/* Email */}
        <label className="mb-4 block  text-left" >
          <span className="text-sm text-gray-600">Email</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>

        {/* Password */}
        <label className="mb-6 block text-left">
          <span className="text-sm text-gray-600 ">Password</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>

        {/* Button */}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>

        {/* Signup link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link
            to="/auth/signup"
            className="cursor-pointer font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn
