import './App.css'
import Carousel from './components/Carousel.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import Navbar from './components/Navbar'
import CategoriesBar from './components/categoriesBar.jsx';
import BestDeals from './components/BestDeals.jsx';
import OfferDeals from './components/OfferDeals.jsx';
import TopDeals from './components/TopDeals.jsx';
import BestSellers from './components/BestSellers.jsx';
import FooterSection from './components/FooterSection.jsx';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mx-32 flex flex-col gap-5">
        <CategoriesBar />
        <Carousel />
        <CategoriesSection />
        <BestDeals />
        <OfferDeals />
        <TopDeals />
        <BestSellers />
      </div>
      <FooterSection />
    </div>
  )
}

export default App
//'

