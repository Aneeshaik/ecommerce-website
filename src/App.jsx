import './App.css'
import Carousel from './components/Carousel.jsx';
import CategoriesSection from './components/CategoriesSection.jsx';
import Navbar from './components/Navbar'
import Categories from './components/categoriesBar.jsx';
function App() {

  return (
    <div className='flex flex-col h-screen mx-32'>
      <Navbar />
      <div className='flex-1'>
        <Categories />
        <Carousel />
        <CategoriesSection />
      </div>
    </div>
  )
}

export default App

