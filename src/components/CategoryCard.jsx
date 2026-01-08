import {Link} from "react-router-dom"

const CategoryCard = ({ title, image }) => {
    return(
        <Link to="">
            <div className="flex flex-col gap-1 items-center">
                <div className="w-38 h-38">
                    <img src={image} alt="Category" className="object-contain w-full h-full bg-[#F2F3F9] rounded-full p-1"/>
                </div>
                <p className="text-black font-semibold text-[18px]">{title}</p>
            </div>
        </Link>
    )
}

export default CategoryCard;