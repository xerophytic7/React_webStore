import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import Cart from './Cart';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Purchase from './Purchase';

const App = () => {

    const [shoppingCart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [purchaseTotal, setPurTotal] = useState(total);
    const [purchasedItems, setPurchasedItems] = useState([]);


    const updateCart = product => {
      console.log(product);
      setCart([
        ...shoppingCart,
        product
      ]);
      setTotal(
        total + product.price
      )
      setPurTotal(
        total + product.price
      )
      setPurchasedItems([
        ...shoppingCart,
        product
      ])
      console.log(shoppingCart);
      console.log(total)
      console.log(purchaseTotal);
    }
    //called when checked out.
    const clearCart = () =>{
      setCart([]);
      setTotal(0);
    }

  return (
    <div>
      
      <Router>
      <Header />

            <Switch>
                <Route path="/products">
                    <Products cart={shoppingCart} updateCart={updateCart}/>
                </Route>

                <Route path="/cart">
                    <Cart clearCart={clearCart} cart={shoppingCart} setCart={setCart} total={total}/>
                </Route>

                <Route path="/purchase">
                  <Purchase total={purchaseTotal} purchasedItems={purchasedItems} clearCart={clearCart} />
                </Route>

                {/* </Router> */}

                <Route path="/">
                    <Home />
                </Route>
                
                
            </Switch>
        </Router>
      {/* Maybe figure out some css to make it look nicer...maybe */}
      <Footer />
    </div>
  );
};

export default App;