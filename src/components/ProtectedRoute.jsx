 import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/me', {
          method: 'GET',
          credentials: 'include'
        })

         setIsAuth(response.ok)
      } catch (error) {
        setIsAuth(false)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (loading) return <p>Checking authentication...</p>

  return isAuth ? <Outlet /> : <Navigate to="/auth/signin" />
}

export default ProtectedRoute
