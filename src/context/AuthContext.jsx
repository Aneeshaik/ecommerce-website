import {createContext, useState, useEffect} from 'react'
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        try {
            const fetchUser = async () => {
                const response = await fetch('http://localhost:5000/auth/me', {
                    credentials: "include"
                })
                if(response.ok){
                    const data = await response.json();
                    setUser(data.user.name);
                    setIsAuthenticated(true);
                }else{
                    setIsAuthenticated(false);
                }
            }
            fetchUser()
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false);
        }
        finally{
            setLoading(false)
        }
    },[isAuthenticated])
    return(
        <AuthContext.Provider value={{user,isAuthenticated, loading, setIsAuthenticated, setLoading}}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthContext