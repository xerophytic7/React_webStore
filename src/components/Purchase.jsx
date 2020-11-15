import React from 'react';

const Purchase = props => {
    return (
        <div>
            Thank you for your order! 
            {props.purchasedItems.map(product => {
                return <div key={product.id}>
                    <div id="orderList">
                    <p>{product.name}: ${product.price}B</p>
                    </div>
                    </div>
            })}
            Total: ${(Math.round(props.total * 100)/100).toFixed(2)}B
        </div>
    );
};

export default Purchase;