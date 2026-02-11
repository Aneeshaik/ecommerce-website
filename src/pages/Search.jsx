import {useSearchParams} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import {useState, useEffect} from 'react'

const Search = () => {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("keyword");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProducts = async() => {
            if (!searchValue?.trim()) return;  
            const response = await fetch(`http://localhost:5000/api/products?keyword=${searchValue}`,{
                credentials:'include'
            })
            if(response.ok){
                const result = await response.json();
                setProducts(result.data);
            }
            console.log(products)
            
        }
        fetchProducts();
    },[searchValue])

    return(
        <div className="grid w-full max-h-[500px] gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-y-scroll">
        {products.length===0 ? <p>No Elements Found</p> : (products.map((product) => (
          <ProductCard key={product._id} product={product} />
        )))}
      </div>
    )
}

export default Search