import React from 'react';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* I want the Router with switch here */}
      {/* will call Products and cart Components */}
      <Router>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        

            <Switch>
                {/* products will use map to display items. Pictures will be locally stored */}
                <Route path="/products"> {/*probably no need for api passthrough*/}
                    <Todos clearState={clearState} products={/*state*/ /* change to prods list */} getApi={getApiAxios}/>
                </Route>

                <Route path="/cart">{/* again, no need for api passthrough */}
                    <Users clearState={clearState} prodsInCart={/*state*/ /* change to prodsInCart list */} getApi={getApiAxios}/>
                </Route>

                <Route path="/">
                    {/* <p>Click on the Nav links!</p>  
                    TODO: introduce company.
                          include picture from an api using axios
                          maybe get creative...maybe*/}
                </Route>
                
                
            </Switch>
        </Router>
      {/* Maybe figure out some css to make it look nicer...maybe */}
      <Footer />
    </div>
  );
};

export default App;