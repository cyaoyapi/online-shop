import '../styles/App.css';
import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import ProductList from './ProductList';

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className='ols-main-content'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ProductList cart={cart} updateCart={updateCart} />
      </div>
      
    </div>
  );
}

export default App;
