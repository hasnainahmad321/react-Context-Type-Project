import { useContext } from 'react';

import {CartContext} from "../context/Caart"
const Cart = () => {
    const cart = useContext(CartContext);

    // Calculate the total bill, assuming cart.items is an array of items
    const total = cart.items.reduce((a,b) => a + b.price, 0);

    return (
        <div className='cart'>
            <h1>Cart</h1> 
            <ul>
                {cart && cart.items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <h5>Total Bill: ${total}</h5>
        </div>
    );
}

export default Cart;
