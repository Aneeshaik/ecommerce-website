import './App.css'
import Carousel from './components/Carousel.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import Navbar from './components/Navbar'
import Categories from './components/categoriesBar.jsx';
import BestDeals from './components/BestDeals.jsx';
import CategoriesSection2 from './components/CategoriesSection2.jsx';
function App() {

  return (
    <div className='flex flex-col h-screen mx-32'>
      <Navbar />
      <div className='flex-1'>
        <Categories />
        <Carousel />
        <CategoriesSection />
        <BestDeals/>
        <CategoriesSection2/>
      </div>
    </div>
  )
}

export default App

