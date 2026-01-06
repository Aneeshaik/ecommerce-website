import './App.css'
import Carousel from './components/Carousel.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import Navbar from './components/Navbar'
import CategoriesBar from './components/categoriesBar.jsx';
import BestDeals from './components/BestDeals.jsx';
import OfferDeals from './components/OfferDeals.jsx';
import TopDeals from './components/TopDeals.jsx';
import BestSellers from './components/BestSellers.jsx';

function App() {

  return (
    <div className='flex flex-col mx-32' >
      <Navbar />
      <div className='flex-1 flex flex-col gap-6'>
        <CategoriesBar />
        <Carousel />
        <CategoriesSection />
        <BestDeals />
        <OfferDeals />
        <TopDeals />
        <BestSellers />
      </div>
    </div>
  )
}

export default App
//'

