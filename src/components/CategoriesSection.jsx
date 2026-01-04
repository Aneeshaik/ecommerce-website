import { ChevronRight } from 'lucide-react';
import shirtImage from '../assets/categories/shirts.png';

const CategoriesSection = () => {
    return (
        <div className='flex flex-col gap-4 my-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Explore Popular Categories</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <span className='leading-none'>View All</span>
                    <ChevronRight size={16} />
                </button>
            </div>
            <div style={{
                scrollbarWidth: 'none'
            }} className='flex gap-14 items-center overflow-x-auto'>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#e4e6ee] w-44 h-44 rounded-full'>
                        <img
                            src={shirtImage}
                            alt="Categories"
                            className="object-contain w-full h-full rounded-full"
                        />
                    </div>
                    <p className='text-black font-semibold text-[18px]'>Shirts</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#e4e6ee] w-44 h-44 rounded-full'>
                        <img
                            src={shirtImage}
                            alt="Categories"
                            className="object-contain w-full h-full rounded-full"
                        />
                    </div>
                    <p className='text-black font-semibold text-[18px]'>Shirts</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#e4e6ee] w-44 h-44 rounded-full'>
                        <img
                            src={shirtImage}
                            alt="Categories"
                            className="object-contain w-full h-full rounded-full"
                        />
                    </div>
                    <p className='text-black font-semibold text-[18px]'>Shirts</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#e4e6ee] w-44 h-44 rounded-full'>
                        <img
                            src={shirtImage}
                            alt="Categories"
                            className="object-contain w-full h-full rounded-full"
                        />
                    </div>
                    <p className='text-black font-semibold text-[18px]'>Shirts</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#e4e6ee] w-44 h-44 rounded-full'>
                        <img
                            src={shirtImage}
                            alt="Categories"
                            className="object-contain w-full h-full rounded-full"
                        />
                    </div>
                    <p className='text-black font-semibold text-[18px]'>Shirts</p>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='bg-[#e4e6ee] w-44 h-44 rounded-full'>
                        <img
                            src={shirtImage}
                            alt="Categories"
                            className="object-contain w-full h-full rounded-full"
                        />
                    </div>
                    <p className='text-black font-semibold text-[18px]'>Shirts</p>
                </div>
            </div>
        </div>
    )
}

export default CategoriesSection