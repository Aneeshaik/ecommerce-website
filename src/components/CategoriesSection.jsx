import { ChevronRight } from 'lucide-react';
import CategoryCard from "./CategoryCard.jsx";
import {useEffect, useState} from 'react'

const CategoriesSection = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
      const fetchCategories = async() => {
        const response = await fetch('http://localhost:5000/api/categories')
        if(response.ok){
          const result = await response.json()
          
          setCategories(result.data)
        }
      }
      fetchCategories()
    },[])
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <p className='text-black font-semibold text-2xl'>Explore Popular Categories</p>
                <button className='flex items-center text-[#018FFF] text-xs font-semibold cursor-pointer'>
                    <span className='leading-none'>View All</span>
                    <ChevronRight size={16} />
                </button>
            </div>
            <div style={{
              scrollbarWidth: 'none'
            }} className='flex gap-14 items-start overflow-x-auto'>
              {categories.map((item) => (
                <CategoryCard
                  key={item._id}
                  title={item.title}
                    image={`http://localhost:5000${item.image}`}
                  subcategories={item.subcategories}
                />
              ))}
            </div>
        </div>
    )
}

export default CategoriesSection