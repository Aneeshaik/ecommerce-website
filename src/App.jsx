import './App.css'
import AppRoutes from './routes/index.jsx';
import { Suspense } from 'react';

function App() {

  return (
    <Suspense fallback={<div className='text-black'>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  )
}

export default App

