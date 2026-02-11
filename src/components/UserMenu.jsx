import { useState, useRef, useEffect } from "react";
import { CircleUserRound } from 'lucide-react';
import {Link} from 'react-router-dom'

const UserMenu = ({ user, logout }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Runs once when component mounts
    useEffect(() => {
        const handleClickOutside = (e) => {
            // If click is outside the menu -> close dropdown
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={menuRef}>
            {/* Username (always visible) */}
            <div className="flex flex-row gap-1" onClick={() => setOpen(!open)} >
                <CircleUserRound />
                <span
                    className="cursor-pointer text-sm font-medium text-black"

                >
                    {user}
                </span>
            </div>
            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                   <Link to="/wishlist"> <button 
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        Wishlist
                    </button>
                    </Link>
                    <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
