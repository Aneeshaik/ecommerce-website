import {Heart} from "lucide-react";
import shirtImage from '../assets/categories/shirts.png';
function CategoriesSection2(){
    return(
        <div className="flex flex-col gap-1 items-start">
            <div className="relative bg-[#e4e6ee] w-44 h-44 rounded-xl flex items-center justify-center">
                <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:scale-110 transition cursor-pointer">
                    <Heart size={18} className="text-gray-700 hover:text-red-500" />
                </div>
                <img
                src={shirtImage}
                alt="Categories"
                className="object-contain w-full h-full rounded-xl"
                />
            </div>        
            <p className="text-black  font-semibold text-[18px]">Shirts</p>
        </div>
    )
}

export default CategoriesSection2;