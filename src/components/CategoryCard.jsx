import {Link} from "react-router-dom"
function CategoryCard({title,image}){
    return(
        <Link to="#">
        <div className="flex flex-col gap-1 items-center">
            <div className="bg-[#e4e6ee] w-44 h-44 rounded-full">
                <img src={image} alt="Category" className="object-contain w-full h-full rounded-full"/>

            </div>
            <p className="text-black font-semibold text-[18px]">{title}</p>
        </div>
        </Link>
    )
}

export default CategoryCard;