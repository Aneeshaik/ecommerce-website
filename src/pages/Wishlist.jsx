import {useEffect} from 'react'
import ProductCard from '../components/ProductCard.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {setWishlist} from '../store/wishlistSlice.js'

const Wishlist = () => {
    console.log("Helllo")
    const dispatch = useDispatch();
    useEffect(() => {
        const getWishlist = async() => {
            const response = await fetch('http://localhost:5000/api/wishlist/get',{credentials:"include"});
            if(response.ok){
                const data = await response.json();
                console.log(data)
                dispatch(setWishlist(data.items))
            }
        }
      
        getWishlist();
    },[dispatch])

    
    const products = useSelector(state => state.wishlist.items)
    
    return(
        <div className="grid w-full max-h-[500px] gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-y-scroll">
        {products.length===0 ? <p>No Products</p> : (products.map((item) => (
  <ProductCard key={item.product._id} product={item.product} />
)))
}
      </div>
    )
}

export default Wishlist;