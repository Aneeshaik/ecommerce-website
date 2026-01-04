import './App.css'
import Navbar from './components/Navbar'
import Categories from './components/categoriesBar.jsx';
function App() {

  return (
   
    <>
      <Navbar />

      {/* Page content */}
      <div className="pt-18">
        <Categories />
      </div>
    </>
  )
}

export default App

