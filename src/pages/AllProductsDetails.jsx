/*import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import ProductCard from '../components/ProductCard'

const AllProductsDetails = () => {
  
  const { state } = useLocation();
  const subcategories = state?.subcategories || [];
  const title = state?.title || "All Products";
  const [items, setItems] = useState([]);
  const [products,setProducts] = useState([])

  
  useEffect(() => {
    const fetchProducts = async() => {
      const response = await fetch(`http://localhost:5000/api/category-products?category=${title}`)
      if(response.ok){
        const result = await response.json()
        setProducts(result.data)
        setItems(result.data)
      }
    }
    fetchProducts()
    window.scrollTo(0, 0);

  }, [title]);

  const changeCategory = (title) => {
    if(title==="All"){
      setItems(products);
      return;
    }else{
      const filteredItems = products.filter(item=>(item.category===title || item.category==="None"));
      setItems(filteredItems)
    }
  }

  return (
    <div>
      <div className="flex font-bold text-[32px] mb-4">
        <p>{title}</p>
      </div>

       {subcategories && 
       (<div className="flex flex-row gap-6" >
          {subcategories.map(({title,image},index)=>(
            <div key={index} className="flex flex-col items-center" onClick={()=>changeCategory(title)}>
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full overflow-hidden">
<img
  src={`http://localhost:5000${image}`}
  className="w-full h-full object-cover"
/>

              </div>
              
              <p>{title}</p>
            </div>
          ))}
          
       </div>)
      }
      <div className="grid w-full h-[500px] gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-y-scroll">
        {items.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
export default AllProductsDetails;*/



import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard'

const AllProductsDetails = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);

  const [subcategories, setSubcategories] = useState([]);

  const [subcategory, setSubcategory] = useState(null)
  // Fetch Subcategories
  useEffect(() => {
    if (!category) return;

    const fetchSubcategories = async () => {
      const response = await fetch(
        `http://localhost:5000/api/categories/subcategories?category=${category}`
      );

      if (response.ok) {
        const data = await response.json();
        
        setSubcategories(data.subcategories);
        if (data.subcategories.length > 0) {
          setSubcategory(data.subcategories[0].title);
        }
      }
    };

    fetchSubcategories();
  }, [category]);

  // Fetch Products
  useEffect(() => {
    if (!category || !subcategory) return;
     console.log(category+" "+subcategory)
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:5000/api/category-products?category=${category}&subcategory=${subcategory}`
      );
      
      if (response.ok) {
        const result = await response.json();
        setProducts(result.data);
        console.log(result.data)
      }
    };

    fetchProducts();
    window.scrollTo(0, 0);
  }, [category, subcategory]);


   useEffect(() => {
    if (!category) return;
     console.log(category)
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:5000/api/category-products?category=${category}`
      );
      
      if (response.ok) {
        const result = await response.json();
        setProducts(result.data);
        console.log(result.data)
      }
    };

    fetchProducts();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div>
      <div className="flex font-bold text-[32px] mb-4">
        <p>{category}</p>
      </div>

      {subcategories &&
        (<div className="flex flex-row gap-6" >
          {subcategories.map(({ title, image }, index) => (
            <div key={index} className="flex flex-col items-center" onClick={() => setSubcategory(title)}>
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full overflow-hidden">
                <img
                  src={`http://localhost:5000${image}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>)
      }
      <div className="grid w-full h-[500px] gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-y-scroll">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsDetails;