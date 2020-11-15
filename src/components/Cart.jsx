import React from 'react';
import { Link } from 'react-router-dom';

const Cart = props => {
    let total = props.total;

    return (
        <div>
            {props.cart.length == 0? <h3>Shopping Cart Empty</h3> : props.cart.map( product => {
               
                return <div key={product.id}>
                    <div id="partners" >
                        <div className="logo-image">
                            <img src={product.src} className="cart"/>
                            <p>{product.name}: ${product.price}B</p>
                        </div>
                    </div>
                    </div>
            }) }
            {props.cart.length == 0? <p></p> : <div id="partners"> <p>Cart Total: ${(Math.round(total * 100)/100).toFixed(2)}B</p>
            <Link to="/purchase" onClick={() => {props.clearCart()}} >
                <button renderas="button">
                    <span>Purchase</span>
                </button>
            </Link> </div>}
            
        </div>
    );
};

export default Cart;