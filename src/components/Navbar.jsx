import { Link } from 'react-router-dom'
import blackLogo from '../assets/logo-black.png'
import { MapPin, Search, ShoppingCart, CircleUserRound, } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const navigate = useNavigate()

useEffect(() => {
  const fetchLoggedInDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/me', {
        credentials: 'include',
      })
      console.log(response.ok)
      if (response.ok) {
        const data = await response.json()
        setIsLoggedIn(data.loggedIn)
        setName(data.user.name)
      } 
    } catch (error) {
      setIsLoggedIn(false)
    }
  }

  fetchLoggedInDetails()
}, []) // ✅ run ONLY once on mount


    const logout = async () => {
        await fetch('http://localhost:5000/auth/logout', {
            method: 'POST',
            credentials: 'include',
        })
        setIsLoggedIn(false)
        navigate('/auth/signin')
    }


    return (
        <div className="py-2 sticky top-0 z-50 flex items-center justify-between bg-white mx-32">
            <img src={blackLogo} alt="Wearly Logo" className="w-32 " />
            <div className='relative w-125'>
                <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full p-2 bg-[#F2F3F7] rounded-4xl mx-auto text-black text-sm focus:outline-none"
                />
                <div className='absolute right-1 bg-[#018FFF] rounded-full p-1 top-1/2 transform -translate-y-1/2'>
                    <Search size={18} />
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-1'>
                    <MapPin className='text-black' />
                    <div className='flex flex-col items-start'>
                        <p className='text-black/70 text-xs font-semibold'>Delivering to Bengaluru</p>
                        <p className='text-black font-semibold text-xs'>Update Location</p>
                    </div>
                </div>
                <Link
                    to="/cart"
                    className="flex items-center gap-1"
                >
                    <ShoppingCart size={20} className='text-black' />
                    <span className="text-sm font-medium text-black">Cart</span>
                </Link>

                {isLoggedIn ? <span className=" flex flex-row gap-1 text-sm font-medium text-black cursor-pointer" onClick={logout}><CircleUserRound /> Hello, {name}</span> : <Link
                    to="/auth/signin"
                    className="flex items-center gap-1"
                ><CircleUserRound size={20} className='text-black cursor-pointer' />
                    <span className="text-sm font-medium text-black">Sign In</span></Link>}


            </div>
        </div>
    )
}

export default Navbar

/*<header className="w-full bg-white border-b fixed top-0 left-0 z-50">
        <div className='flex items-center justify-between w-full'>
            <img src={blackLogo} alt="Wearly Logo" className="w-32 mx-auto"/>
            <div className='relative w-125'>
                <input 
                    type="text"
                    placeholder="Search for products, brands and more" 
                    className="w-full p-2 bg-[#F2F3F7] rounded-4xl mx-auto text-black text-sm focus:outline-none"
                />
                <div className='absolute right-1 bg-[#018FFF] rounded-full p-1 top-1/2 transform -translate-y-1/2'>
                    <Search size={18}/>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <MapPin color='#91939B' />
                    <div className='flex flex-col items-start'>
                        <p className='text-[#91939B] text-xs font-semibold'>Delivering to Bengaluru</p>
                        <p className='text-[#535759] font-semibold text-xs'>Update Location</p>
                    </div>
                </div>
                <Link
                    to="/#"
                    className="flex items-center gap-1"
                >
                    <ShoppingCart color='#91939B' size={20} />
                    <span className="text-sm font-medium text-[#535759]">Cart</span>
                </Link>
                <Link
                    to="/#"
                    className="flex items-center gap-1"
                >
                    <CircleUserRound color='#91939B' size={20} />
                    <span className="text-sm font-medium text-[#535759]">Sign In</span>
                </Link>
            </div>
        </div> */