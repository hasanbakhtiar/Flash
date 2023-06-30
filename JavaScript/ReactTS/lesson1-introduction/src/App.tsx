import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductList from './components/ProductList';
const App:React.FC = () => {
  return (
    <div>
        <ProductList />
    </div>
  )
}

export default App